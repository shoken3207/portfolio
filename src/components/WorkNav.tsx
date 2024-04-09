import Link from "next/link";
import React from "react";

const WorkNav = ({ works }: { works: any[] }) => {
  return (
    <div className=" max-w-2xl mx-auto w-10/12 flex flex-wrap justify-center gap-6">
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
