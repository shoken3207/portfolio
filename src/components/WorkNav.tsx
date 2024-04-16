import React from "react";
import LinkWrap from "./common/LinkWrap";

const WorkNav = ({ works, id }: { works: any[]; id: string }) => {
  return (
    <div
      className="w-11/12 max-w-4xl mx-auto h-screen py-4 flex items-center justify-center"
      id={id}
    >
      <div className="flex items-center justify-center flex-wrap gap-6">
        {works.map((work) => (
          <LinkWrap key={work.id} href={`/work/${work.id}`}>
            <div className=" w-32 hover:opacity-50">
              <img src={work.images[0].url} alt="" />
              <p>{work.title}</p>
            </div>
          </LinkWrap>
        ))}
      </div>
    </div>
  );
};

export default WorkNav;
