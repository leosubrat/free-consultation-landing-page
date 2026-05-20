"use client";

import type { ReactNode } from "react";

export default function FormScrollButton({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const scrollToForm = () => {
    const target = document.getElementById("consultation-form");

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <button type="button" className={className} onClick={scrollToForm}>
      {children}
    </button>
  );
}
