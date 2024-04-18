import React from "react";
import SkillItem from "./SkillItem";
import { portfolio_skill } from "@/types/cms-portfolio-types";
import IntersectionObserverWrap from "../common/IntersectionObserverWrap";

const SkillCard = ({
  title,
  logoImage,
  skills,
}: {
  title: string;
  logoImage: string;
  skills: portfolio_skill[];
}) => {
  return (
    <div className="py-4 px-5  rounded-[10px] bg-white shadow-sm w-[95%] max-w-[360px] sm:w-full">
      <IntersectionObserverWrap
        key={title}
        rootMargin="-150px"
        defaultClass="flex flex-col gap-y-4 items-center opacity-0 transition-all duration-1000 "
        addClasses={[]}
        removeClasses={["opacity-0"]}
      >
        <h3 className="flex items-center justify-center gap-x-2">
          <img className="w-10" src={logoImage} alt="" />
          <span className="font-bold text-xl">{title}</span>
        </h3>
        <table className="font-bold" cellSpacing={20}>
          <thead>
            <tr>
              <th>技術</th>
              <th>スキルレベル</th>
            </tr>
          </thead>
          <tbody>
            {skills.map(({ name, level }) => (
              <SkillItem key={name} name={name} level={level} />
            ))}
          </tbody>
        </table>
      </IntersectionObserverWrap>
    </div>
  );
};

export default SkillCard;
