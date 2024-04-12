import {
  portfolio_qualification,
  portfolio_skillsByCategory,
} from "@/types/cms-portfolio-types";
import React from "react";

const Skill = ({
  id,
  skills,
  qualification,
}: {
  id: string;
  skills: portfolio_skillsByCategory[];
  qualification: portfolio_qualification[];
}) => {
  return (
    <div
      id={id}
      className="w-full min-h-screen flex items-center justify-center"
    >
      Skill
    </div>
  );
};

export default Skill;
