"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const saveData = () => (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;

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
        { opacity: 0.5, transform: "perspective(1200px) translateY(20px) rotateX(2deg) scale(.96)", transformOrigin: "50% 100px" },
        { opacity: 1, transform: "none", transformOrigin: "50% 100px" },
      ], { duration: 360, easing: "cubic-bezier(.2,.7,.2,1)" }) ?? null;
    }
  }, [pathname]);

  useEffect(() => {
    const navigate = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || reducedMotion() || saveData()) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname || /\.[a-z0-9]+$/i.test(url.pathname)) return;
      if (!document.startViewTransition) return;
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
        router.push(url.pathname + url.search + url.hash);
      }));
      transition.current = current;
      void current.ready.catch(() => {});
      void current.finished.catch(() => {}).finally(() => {
        if (transition.current === current) {
          transition.current = null;
          document.documentElement.classList.remove("route-transition");
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
      const animation = element.animate(frames, { duration: mobile ? 380 : 500, delay, easing: "cubic-bezier(.2,.7,.2,1)" });
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
          { opacity: 0.4, transform: project ? "perspective(1000px) translateY(28px) scale(.95)" : engineering ? "perspective(1000px) translateY(26px) rotateX(5deg)" : card ? "perspective(1000px) translateY(30px) rotateY(-3deg)" : "translateY(22px)", transformOrigin: "50% 100%" },
          { opacity: 1, transform: "none", transformOrigin: "50% 100%" },
        ], card ? Math.min(index % 4 * 45, 135) : 0);
        if (project) {
          const image = entry.target.querySelector("img");
          if (image) animate(image, [{ transform: "scale(1.07)" }, { transform: "scale(1)" }]);
        }
      }
    }, { threshold: 0.12 });
    if (!preference.matches && !saveData()) document.querySelectorAll("main .section-heading, main .service-card, main .project-card, main .process-grid li, main .area-grid article").forEach(element => observer.observe(element));
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
  return null;
}
