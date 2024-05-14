"use client";
import { works } from "@/types/cms-types";
import { useEffect, useState } from "react";
import WorkCard from "./WorkCard";

const WorkCardWrapper = ({ works }: { works: works[] }) => {
  const [childrenCount, setChildrenCount] = useState<number>(0);
  useEffect(() => {
    let count = 1;
    const screenWidth = window.innerWidth;
    console.log(window.innerWidth);
    if (screenWidth >= 923) {
      count = 3;
    } else if (screenWidth >= 640) {
      count = 2;
    }
    setChildrenCount(count);
  }, []);
  return (
    <div className="flex justify-center items-stretch flex-wrap gap-x-4 gap-y-8  sm:grid grid-cols-auto-fit-[250px] sm:gap-10">
      {works.map((work, index) => (
        <WorkCard
          key={work.id}
          childrenCount={childrenCount}
          work={work}
          index={index}
        />
      ))}
    </div>
  );
};

export default WorkCardWrapper;
