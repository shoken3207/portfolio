import WorkNav from "@/components/WorkNav";
import Form from "@/components/form/Form";
import History from "@/components/history/History";
import Home from "@/components/home/Home";
import MotionWrapper from "@/components/motionWrapper/motionWrapper";
import Profile from "@/components/profile/Profile";
import Skill from "@/components/skill/Skill";
import { getPortfolioInfo } from "@/libs/microcms";
import { portfolio } from "@/types/cms-portfolio-types";
import React from "react";

const page = async () => {
  const portfolio: portfolio = await getPortfolioInfo();
  console.log(portfolio);
  return (
    <MotionWrapper>
      <Home id="home" />
      <Profile id="profile" profileInfo={portfolio.profile} />
      <History id="history" />
      <Skill
        id="skills"
        skills={portfolio.skills}
        qualifications={portfolio.qualifications}
      />
      <WorkNav id="works" works={portfolio.works} />
      <Form id="form" />
    </MotionWrapper>
  );
};

export default page;
