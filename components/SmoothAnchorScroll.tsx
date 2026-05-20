"use client";

import { MouseEvent, useEffect } from "react";
import type { ReactNode } from "react";

function scrollToTarget(target: HTMLElement) {
  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>) {
  const href = event.currentTarget.getAttribute("href");

  if (!href?.startsWith("#")) {
    return;
  }

  const target = document.querySelector<HTMLElement>(href);

  if (!target) {
    return;
  }

  event.preventDefault();
  scrollToTarget(target);
  window.history.pushState(null, "", href);
}

export function SmoothAnchorLink({
  href,
  children,
  className
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={className} onClick={handleAnchorClick}>
      {children}
    </a>
  );
}

export default function SmoothAnchorScroll() {
  useEffect(() => {
    const handleClick = (event: globalThis.MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );

      if (!link) {
        return;
      }

      const href = link.getAttribute("href");
      const target = href ? document.querySelector<HTMLElement>(href) : null;

      if (!href || !target) {
        return;
      }

      event.preventDefault();
      scrollToTarget(target);
      window.history.pushState(null, "", href);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
