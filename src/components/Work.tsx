import React from "react";
import LinkWrap from "./common/LinkWrap";
import { works } from "@/types/cms-portfolio-types";

const Work = ({ works }: { works: any[] }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-8">
      {works.map((work) => (
        <LinkWrap key={work.id} href={`/work/${work.id}`}>
          <div className=" w-[90%] mx-auto max-w-96 hover:opacity-50 flex flex-col gap-y-1.5 ">
            <img src={work.images[0].url} alt="" />
            <p className="text-center text-xl">{work.title}</p>
          </div>
        </LinkWrap>
      ))}
    </div>
  );
};

export default Work;
