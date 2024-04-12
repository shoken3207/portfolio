import {
  portfolio_qualification,
  portfolio_skillsByCategory,
} from "@/types/cms-portfolio-types";
import React from "react";
import SkillCard from "./SkillCard";

const Skill = ({
  id,
  skills,
  qualifications,
}: {
  id: string;
  skills: portfolio_skillsByCategory[];
  qualifications: portfolio_qualification[];
}) => {
  return (
    <div
      id={id}
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col gap-y-8 w-[90%] max-w-2xl mx-auto">
        <table>
          <tr>
            <th>資格名</th>
            <th>取得年月日</th>
          </tr>
          {qualifications.map(({ name, acquisitionDate }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{acquisitionDate}</td>
            </tr>
          ))}
        </table>
        <div className=" flex flex-wrap items-start justify-center gap-4">
          {skills.map(({ title, logoImage, skills }) => (
            <SkillCard
              key={title}
              title={title}
              logoImage={logoImage.url}
              skills={skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
