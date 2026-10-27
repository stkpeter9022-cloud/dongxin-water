"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const saveData = () => (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
const lightDevice = () => navigator.hardwareConcurrency <= 2 || ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 2;

// Only the main-content snapshot moves. Contact links and server HTML stay live.
export default function PageMotion() {
  const pathname = usePathname();
  const router = useRouter();
  const previous = useRef(pathname);
  const pending = useRef<(() => void) | null>(null);
  const pendingPath = useRef<string | null>(null);
  const transition = useRef<ViewTransition | null>(null);
  const entrance = useRef<Animation | null>(null);

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
      entrance.current = document.getElementById("main-content")?.animate([
        { opacity: 0.35, transform: lightDevice() ? "translateY(14px)" : "perspective(1200px) translateY(28px) rotateY(-2.5deg) scale(.975)", transformOrigin: "50% 100px" },
        { opacity: 1, transform: "none", transformOrigin: "50% 100px" },
      ], { duration: 360, easing: "cubic-bezier(.3,.15,.25,1)" }) ?? null;
    }
  }, [pathname]);

  useEffect(() => {
    const navigate = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || reducedMotion() || saveData()) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname || /\.[a-z0-9]+$/i.test(url.pathname)) return;
      if (!document.startViewTransition || lightDevice()) return;
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
      void current.ready.catch(() => {});
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
      document.documentElement.classList.remove("route-transition");
    };
  }, [router]);

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const start = performance.now();
    const mobile = matchMedia("(max-width: 767px)").matches;
    const animate = (element: Element, frames: Keyframe[], delay = 0) => {
      const animation = element.animate(frames, { duration: lightDevice() ? 300 : mobile ? 400 : 520, delay, easing: "cubic-bezier(.22,.45,.3,1)" });
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
        const index = card ? Array.from(entry.target.parentElement!.children).indexOf(entry.target) : 0;
        animate(entry.target, [
          { opacity: 0.25, transform: lightDevice() ? "translateY(16px)" : project ? "perspective(1000px) translateY(40px) rotateY(3deg) scale(.93)" : engineering ? "perspective(1000px) translateY(36px) rotateX(3deg) scale(.97)" : card ? "perspective(1000px) translateY(42px) rotateY(-3deg) scale(.97)" : "translateY(30px)", transformOrigin: "50% 100%" },
          { opacity: 1, transform: "none", transformOrigin: "50% 100%" },
        ], card && !lightDevice() ? Math.min(index % 4 * 60, 180) : 0);
        if (project) {
          const image = entry.target.querySelector("img");
          if (image && !lightDevice()) animate(image, [{ transform: "scale(1.10)" }, { transform: "scale(1)" }]);
        }
      }
    }, { threshold: 0.12 });
    if (!preference.matches && !saveData()) document.querySelectorAll("main .section-heading, main .service-card, main .project-card, main .knowledge-card, main .engineering-brief, main .process-grid li, main .area-grid article").forEach(element => observer.observe(element));
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
        card?.style.setProperty("--tilt-x", `${(0.5 - y) * 6}deg`);
        card?.style.setProperty("--tilt-y", `${(x - 0.5) * 6}deg`);
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
