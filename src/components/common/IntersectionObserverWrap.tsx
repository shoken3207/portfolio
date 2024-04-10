"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import React, { useRef } from "react";

const IntersectionObserverWrap = ({
  addClasses,
  removeClasses,
  defaultClass,
  children,
}: {
  addClasses: string[];
  removeClasses: string[];
  defaultClass: string;
  children: React.ReactNode;
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
  useIntersectionObserver([ref], showElements, { rootMargin: "-50px" });
  return (
    <div
      ref={ref}
      className={defaultClass || " opacity-0 transition-all duration-1000"}
    >
      {children}
    </div>
  );
};

export default IntersectionObserverWrap;
