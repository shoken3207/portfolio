"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import React, { useRef } from "react";

const IntersectionObserverWrap = ({
  addClasses,
  removeClasses,
  defaultClass,
  rootMargin,
  children,
  style,
}: {
  addClasses: string[];
  removeClasses: string[];
  defaultClass: string;
  rootMargin?: string;
  children: React.ReactNode;
  style?: {};
}) => {
  const showElements = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (addClasses.length > 0) {
          entry.target.classList.add(...addClasses);
        }
        if (removeClasses.length > 0) {
          entry.target.classList.remove(...removeClasses);
        }
      }
    });
  };
  const ref = useRef<HTMLHeadingElement>(null);
  useIntersectionObserver([ref], showElements, {
    rootMargin: rootMargin || "-50px",
  });
  return (
    <div
      style={style}
      ref={ref}
      className={defaultClass || " opacity-0 transition-all duration-1000"}
    >
      {children}
    </div>
  );
};

export default IntersectionObserverWrap;
