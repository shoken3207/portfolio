import React from "react";
import LinkWrap from "./common/LinkWrap";

const Work = ({ works, id }: { works: any[]; id: string }) => {
  return (
    <div
      className="w-11/12 max-w-4xl mx-auto min-h-screen py-4 flex items-center justify-center flex-col gap-y-6"
      id={id}
    >
      <h1 className="font-bold text-3xl">Works</h1>
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
    </div>
  );
};

export default Work;
