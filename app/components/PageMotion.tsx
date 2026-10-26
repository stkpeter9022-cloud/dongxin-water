"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Enhance server-rendered content without delaying navigation or hiding text.
export default function PageMotion() {
  const pathname = usePathname();
  const previous = useRef(pathname);

  useEffect(() => {
    const enabled = matchMedia("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)").matches;
    const main = document.getElementById("main-content");
    const animations: Animation[] = [];
    if (enabled && main && previous.current !== pathname) {
      animations.push(main.animate([
        { opacity: 0.85, transform: "perspective(1400px) translateY(6px) rotateX(-0.6deg) scale(.994)" },
        { opacity: 1, transform: "none" },
      ], { duration: 240, easing: "ease-out" }));
    }
    previous.current = pathname;
    if (!enabled || !main) return;

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        animations.push(entry.target.animate([
          { opacity: 0.8, transform: "translateY(10px)" },
          { opacity: 1, transform: "none" },
        ], { duration: 240, easing: "ease-out" }));
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    main.querySelectorAll(".project-card, .site-section > .site-container").forEach(element => {
      if (element.getBoundingClientRect().top >= innerHeight) observer.observe(element);
    });

    const leave = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || link.target || link.hasAttribute("download")) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.pathname === pathname) return;
      animations.push(main.animate([
        { transform: "none", opacity: 1 },
        { transform: "perspective(1400px) scale(.992) rotateY(.5deg)", opacity: 0.9 },
      ], { duration: 200, easing: "ease-out" }));
    };
    document.addEventListener("click", leave);
    return () => {
      observer.disconnect();
      document.removeEventListener("click", leave);
      animations.forEach(animation => animation.cancel());
    };
  }, [pathname]);
  return null;
}
