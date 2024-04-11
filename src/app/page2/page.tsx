import WorkNav from "@/components/WorkNav";
import Home from "@/components/home/Home";
import MotionWrapper from "@/components/motionWrapper/motionWrapper";
import Profile from "@/components/profile/Profile";
import { getPortfolioInfo, getWorks } from "@/libs/microcms";
import { portfolio } from "@/types/cms-portfolio-types";
import React from "react";

const page = async () => {
  // const { contents } = await getWorks();
  const portfolio: portfolio = await getPortfolioInfo();
  console.log(portfolio);
  return (
    <MotionWrapper>
      <Home />
      <Profile profileInfo={portfolio.profile} />
      <WorkNav works={portfolio.works} />
    </MotionWrapper>
  );
};

export default page;
