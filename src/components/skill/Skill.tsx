import {
  portfolio_qualification,
  portfolio_skillsByCategory,
} from "@/types/cms-portfolio-types";
import React from "react";
import SkillCard from "./SkillCard";
import IntersectionObserverWrap from "../common/IntersectionObserverWrap";
import QualificationTable from "./QualificationTable";

const Skill = ({
  skills,
  qualifications,
}: {
  skills: portfolio_skillsByCategory[];
  qualifications: portfolio_qualification[];
}) => {
  return (
    <div className="flex flex-col gap-y-12 ">
      <div className="flex justify-center items-stretch flex-wrap gap-x-4 gap-y-8  sm:grid grid-cols-auto-fit-[270px]">
        {skills.map(({ title, logoImage, skills }) => (
          <SkillCard
            key={title}
            title={title}
            logoImage={logoImage.url}
            skills={skills}
          />
        ))}
      </div>
      <IntersectionObserverWrap
        rootMargin="-100px"
        defaultClass="scale-0 transition-all duration-300"
        addClasses={[]}
        removeClasses={["scale-0"]}
      >
        <div className="w-full mx-auto  flex flex-col items-start justify-start gap-y-4 px-4  py-4 shadow-md rounded-[10px] bg-white">
          <h3 className="w-full  text-2xl font-bold sm:text-3xl">保持資格</h3>
          <QualificationTable qualifications={qualifications} />
        </div>
      </IntersectionObserverWrap>
    </div>
  );
};

export default Skill;
