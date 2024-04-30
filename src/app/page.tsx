import Work from "@/components/Work";
import Layout from "@/components/common/Layout";
import Section from "@/components/common/Section";
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
  return <Layout portfolio={portfolio} />;
};

export default page;
