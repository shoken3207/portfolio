import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import React, { useRef } from "react";
import IntersectionObserverWrap from "../common/IntersectionObserverWrap";

const SectionTemplate = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <IntersectionObserverWrap
      defaultClass=""
      addClasses={[]}
      removeClasses={["opacity-0"]}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold pl-2 border-l-8 border-blue-600">
          {title}
        </h2>
        {children}
      </div>
    </IntersectionObserverWrap>
  );
};

export default SectionTemplate;