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
  return (
    // <MotionWrapper>
    //   <div className="flex flex-col gap-y-16">
    //     <Section id="home" sectionTitle="Home">
    //       <Home />
    //     </Section>
    //     <Section id="profile" sectionTitle="Profile">
    //       <Profile profileInfo={portfolio.profile} />
    //     </Section>
    //     <Section id="history" sectionTitle="History" maxWidth="max-w-full">
    //       <History />
    //     </Section>
    //     <Section id="skills" sectionTitle="Skills">
    //       <Skill
    //         skills={portfolio.skills}
    //         qualifications={portfolio.qualifications}
    //       />
    //     </Section>
    //     <Section id="works" sectionTitle="Works" maxWidth="max-w-[1000px]">
    //       <Work works={portfolio.works} />
    //     </Section>
    //     <Section id="form" sectionTitle="お問い合わせ">
    //       <Form />
    //     </Section>
    //   </div>
    // </MotionWrapper>
    <Layout portfolio={portfolio} />
  );
};

export default page;
