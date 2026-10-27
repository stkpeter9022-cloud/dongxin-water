"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const saveData = () => (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
// A core-count hint alone (often privacy-limited) must not disable normal phones.
const lightDevice = () => navigator.hardwareConcurrency <= 2 && ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 2;
// WebKit's live new-page snapshot can paint blank with 3D transforms. Use the
// tested DOM-layer path there, including all iOS browsers, rather than a blank frame.
const nativeSnapshots = () => !!document.startViewTransition && !(/AppleWebKit/.test(navigator.userAgent) && !/Chrome|Chromium|Edg|OPR|SamsungBrowser/.test(navigator.userAgent));
const retainPage = () => {
  const main = document.getElementById("main-content");
  if (!main) return null;
  const rect = main.getBoundingClientRect();
  const layer = document.createElement("div");
  layer.className = "motion-layer";
  layer.setAttribute("aria-hidden", "true");
  layer.inert = true;
  const copy = main.cloneNode(true) as HTMLElement;
  // Keep only the viewport's content; distant sections become measured spacers.
  Array.from(copy.children).forEach((child, index) => {
    const box = main.children[index].getBoundingClientRect();
    const element = child as HTMLElement;
    element.style.contentVisibility = "visible";
    if (box.bottom < 72 || box.top > innerHeight) {
      element.replaceChildren();
      element.style.cssText = `height:${box.height}px;padding:0;margin:0;box-sizing:border-box;content-visibility:visible`;
    }
  });
  copy.querySelectorAll("script").forEach(node => node.remove());
  [copy, ...copy.querySelectorAll("[id]")].forEach(node => node.removeAttribute("id"));
  copy.style.cssText += `;position:absolute;left:${rect.left}px;top:${rect.top - 72}px;width:${rect.width}px;margin:0;background:#fff;transform-origin:50% ${innerHeight * .45 - rect.top}px`;
  copy.dataset.motionOutgoing = "true";
  layer.append(copy);
  document.body.append(layer);
  document.documentElement.classList.add("layer-transition");
  setTimeout(() => {
    layer.remove();
    if (!document.querySelector(".motion-layer")) document.documentElement.classList.remove("layer-transition");
  }, 2000);
  return { layer, copy };
};
const enterPage = () => {
  if (reducedMotion() || saveData()) return null;
  const mobile = matchMedia("(max-width: 767px)").matches;
  const light = lightDevice();
  const main = document.getElementById("main-content");
  if (!main) return null;
  const origin = `50% ${Math.max(150, innerHeight * .45 - main.getBoundingClientRect().top)}px`;
  const depth = light ? "perspective(900px) translateX(20px) rotateY(-4deg) scale(.96)" : mobile ? "perspective(850px) translateX(38px) translateZ(-24px) rotateY(-6deg) scale(.95)" : "perspective(850px) translateX(90px) translateZ(-65px) rotateY(-10deg) scale(.90)";
  return main.animate([
    { opacity: .35, transform: depth, transformOrigin: origin },
    { opacity: 1, transform: depth, transformOrigin: origin, offset: .18 },
    { opacity: 1, transform: "none", transformOrigin: origin },
  ], { duration: light ? 460 : mobile ? 520 : 700, easing: "cubic-bezier(.4,0,.25,1)" });
};

// Only the main-content snapshot moves. Contact links and server HTML stay live.
export default function PageMotion() {
  const pathname = usePathname();
  const router = useRouter();
  const previous = useRef(pathname);
  const pending = useRef<(() => void) | null>(null);
  const pendingPath = useRef<string | null>(null);
  const transition = useRef<ViewTransition | null>(null);
  const entrance = useRef<Animation | null>(null);
  const outgoing = useRef<ReturnType<typeof retainPage>>(null);

  useLayoutEffect(() => {
    const changed = previous.current !== pathname;
    previous.current = pathname;
    if (pending.current) {
      if (pendingPath.current === pathname) {
        pending.current();
        pending.current = null;
        pendingPath.current = null;
      }
    } else if (changed && !reducedMotion() && !saveData()) {
      entrance.current?.cancel();
      const retained = outgoing.current;
      if (retained) {
        const mobile = matchMedia("(max-width: 767px)").matches;
        retained.copy.animate([
          { opacity: 1, transform: "perspective(850px) translateX(0) translateZ(0) rotateY(0) scale(1)" },
          { opacity: 1, transform: mobile ? "perspective(850px) translateX(-30%) translateZ(-30px) rotateY(7deg) scale(.95)" : "perspective(850px) translateX(-32%) translateZ(-90px) rotateY(12deg) scale(.90)", offset: .45 },
          { opacity: 1, offset: .8 },
          { opacity: 0, transform: mobile ? "perspective(850px) translateX(-95%) translateZ(-55px) rotateY(8deg) scale(.94)" : "perspective(850px) translateX(-90%) translateZ(-150px) rotateY(14deg) scale(.88)" },
        ], { duration: mobile ? 520 : 700, easing: "cubic-bezier(.4,0,.6,1)" });
      }
      entrance.current = enterPage();
      void entrance.current?.finished.catch(() => {}).finally(() => {
        retained?.layer.remove();
        if (outgoing.current === retained) {
          outgoing.current = null;
          document.documentElement.classList.remove("layer-transition");
        }
        if (location.pathname === pathname && location.hash) {
          document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: "instant", block: "start" });
        }
      });
    }
  }, [pathname]);

  useEffect(() => {
    const navigate = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || reducedMotion() || saveData()) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname || /\.[a-z0-9]+$/i.test(url.pathname)) return;
      outgoing.current?.layer.remove();
      outgoing.current = null;
      document.documentElement.classList.remove("layer-transition");
      if (!nativeSnapshots() || lightDevice()) {
        if (!lightDevice()) outgoing.current = retainPage();
        return; // Next's normal Link navigation proceeds immediately.
      }
      event.preventDefault();
      pending.current?.();
      transition.current?.skipTransition();
      entrance.current?.cancel();
      document.documentElement.classList.add("route-transition");
      let timer: ReturnType<typeof setTimeout>;
      const current = document.startViewTransition(() => new Promise<void>(resolve => {
        if (transition.current !== current) { resolve(); return; }
        const finish = () => { clearTimeout(timer); resolve(); };
        pending.current = finish;
        pendingPath.current = url.pathname;
        timer = setTimeout(() => { if (pending.current === finish) { pending.current = null; pendingPath.current = null; } current.skipTransition(); resolve(); }, 1000);
        router.push(url.pathname + url.search + url.hash, url.hash ? { scroll: false } : undefined);
      }));
      transition.current = current;
      void current.ready.catch(() => {
        // Snapshot capture may fail even when the API exists (e.g. hidden tabs).
        void current.updateCallbackDone.then(() => {
          if (transition.current === current && location.pathname === url.pathname) {
            entrance.current?.cancel();
            entrance.current = enterPage();
          }
        }).catch(() => {});
      });
      void current.finished.catch(() => {}).finally(() => {
        if (transition.current === current) {
          transition.current = null;
          document.documentElement.classList.remove("route-transition");
          // Resolve explicit fragment navigation after snapshot/layout settling.
          if (url.hash && location.pathname === url.pathname && location.hash === url.hash) {
            document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView({ behavior: "instant", block: "start" });
          }
        }
      });
    };
    document.addEventListener("click", navigate, true);
    return () => {
      document.removeEventListener("click", navigate, true);
      pending.current?.();
      transition.current?.skipTransition();
      entrance.current?.cancel();
      outgoing.current?.layer.remove();
      outgoing.current = null;
      document.documentElement.classList.remove("route-transition", "layer-transition");
    };
  }, [router]);

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const start = performance.now();
    const mobile = matchMedia("(max-width: 767px)").matches;
    const animate = (element: Element, frames: Keyframe[], delay = 0) => {
      const animation = element.animate(frames, { duration: lightDevice() ? 420 : mobile ? 640 : 820, delay, easing: "cubic-bezier(.3,.1,.25,1)" });
      animations.add(animation);
      void animation.finished.catch(() => {}).finally(() => animations.delete(animation));
    };
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (preference.matches || saveData() || entry.boundingClientRect.bottom < 0 || performance.now() - start < 180) continue;
        const card = entry.target.classList.contains("service-card");
        const project = entry.target.classList.contains("project-card");
        const engineering = !!entry.target.closest("#engineering");
        const process = !!entry.target.closest(".process-grid");
        const index = card ? Array.from(entry.target.parentElement!.children).indexOf(entry.target) : 0;
        animate(entry.target, [
          { opacity: 0.25, transform: lightDevice() ? "translateY(40px) scale(.96)" : project ? "perspective(850px) translateY(90px) rotateY(9deg) scale(.92)" : engineering ? "perspective(850px) translateY(100px) rotateX(10deg) scale(.93)" : card ? "perspective(850px) translateY(80px) rotateY(-8deg) scale(.94)" : process ? "perspective(850px) translateX(-35px) translateY(75px) rotateY(8deg) scale(.94)" : "perspective(900px) translateY(70px) rotateX(7deg) scale(.96)", transformOrigin: "50% 70%" },
          { opacity: 1, transform: "none", transformOrigin: "50% 100%" },
        ], card && !lightDevice() ? Math.min(index % 4 * 85, 255) : 0);
        if (project) {
          const image = entry.target.querySelector("img");
          if (image && !lightDevice()) animate(image, [{ transform: "translateY(20px) scale(1.16)" }, { transform: "translateY(0) scale(1)" }]);
        }
      }
    }, { threshold: 0.12 });
    if (!preference.matches && !saveData()) document.getElementById("main-content")?.querySelectorAll(".section-heading, .service-card, .project-card, .knowledge-card, .engineering-brief, .process-grid li, .area-grid article").forEach(element => observer.observe(element));
    const stop = () => {
      if (!preference.matches) return;
      animations.forEach(animation => animation.cancel());
      entrance.current?.cancel();
      transition.current?.skipTransition();
    };
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", stop);
      animations.forEach(animation => animation.cancel());
    };
  }, [pathname]);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches || reducedMotion() || saveData() || lightDevice()) return;
    let card: HTMLElement | null = null;
    let rect: DOMRect | null = null;
    let frame = 0;
    let x = 0;
    let y = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (card) for (const name of ["--tilt-x", "--tilt-y", "--shine-x", "--shine-y"]) card.style.removeProperty(name);
      card = null;
      rect = null;
    };
    const move = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>(".service-card, .project-card, .knowledge-card") : null;
      if (!target || reducedMotion() || saveData()) { reset(); return; }
      if (target !== card) { reset(); card = target; rect = target.getBoundingClientRect(); }
      if (!rect) return;
      x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        card?.style.setProperty("--tilt-x", `${(0.5 - y) * 14}deg`);
        card?.style.setProperty("--tilt-y", `${(x - 0.5) * 14}deg`);
        card?.style.setProperty("--shine-x", `${x * 100}%`);
        card?.style.setProperty("--shine-y", `${y * 100}%`);
      });
    };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("scroll", reset, { passive: true });
    window.addEventListener("blur", reset);
    return () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("scroll", reset);
      window.removeEventListener("blur", reset);
      reset();
    };
  }, [pathname]);
  return null;
}
