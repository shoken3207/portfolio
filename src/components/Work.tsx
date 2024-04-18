import React from "react";
import LinkWrap from "./common/LinkWrap";

const Work = ({ works }: { works: any[] }) => {
  return (
    <div className="flex justify-center items-stretch flex-wrap gap-x-4 gap-y-8  sm:grid grid-cols-auto-fit-[250px] sm:gap-10">
      {works.map((work) => (
        <div
          key={work.id}
          className=" w-full mx-auto max-w-96 flex flex-col gap-y-1.5 "
        >
          <LinkWrap href={`/work/${work.id}`}>
            <div className=" overflow-hidden w-full aspect-w-16 aspect-h-9 relative">
              <div className="w-full h-full absolute top-0 left-0"></div>
              <img
                className="w-full h-full transition-all duration-300 hover:scale-125 "
                src={work.images[0].url}
                alt=""
              />
            </div>
          </LinkWrap>
          <p className="text-center text-xl">{work.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Work;
