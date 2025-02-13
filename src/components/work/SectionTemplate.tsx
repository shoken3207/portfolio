import React from "react";
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
        <div className="flex items-center gap-2 rounded-md">
          <div className="w-2 h-8 bg-blue-400 rounded-md"></div>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="pl-4">{children}</div>
      </div>
    </IntersectionObserverWrap>
  );
};

export default SectionTemplate;
