import Link from "next/link";
import React from "react";

const WorkNav = ({ works, id }: { works: any[]; id: string }) => {
  return (
    <div
      id={id}
      className=" mw-11/12 max-w-3xl mx-auto min-h-screen flex flex-wrap justify-center gap-6 py-8"
    >
      {works.map((work) => (
        <Link key={work.id} href={`/work/${work.id}`}>
          <div className=" w-32 hover:opacity-50">
            <img src={work.images[0].url} alt="" />
            <p>{work.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WorkNav;
