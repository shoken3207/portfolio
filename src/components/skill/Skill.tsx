import {
  portfolio_qualification,
  portfolio_skillsByCategory,
} from "@/types/cms-portfolio-types";
import React from "react";
import SkillCard from "./SkillCard";

const Skill = ({
  skills,
  qualifications,
}: {
  skills: portfolio_skillsByCategory[];
  qualifications: portfolio_qualification[];
}) => {
  return (
    <div className="flex flex-col gap-y-8 ">
      <div className=" flex flex-wrap justify-center gap-x-4 gap-y-8">
        {skills.map(({ title, logoImage, skills }) => (
          <SkillCard
            key={title}
            title={title}
            logoImage={logoImage.url}
            skills={skills}
          />
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>資格名</th>
            <th>取得年月日</th>
          </tr>
        </thead>
        <tbody>
          {qualifications.map(({ name, acquisitionDate }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{acquisitionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skill;
