"use client";
import Work from "@/components/Work";
import Section from "@/components/common/Section";
import Form from "@/components/form/Form";
import History from "@/components/history/History";
import Home from "@/components/home/Home";
import MotionWrapper from "@/components/motionWrapper/motionWrapper";
import Profile from "@/components/profile/Profile";
import Skill from "@/components/skill/Skill";
import { portfolio } from "@/types/cms-portfolio-types";
import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";

const Layout = ({ portfolio }: { portfolio: portfolio }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  console.log("headerHeight: ", headerHeight);

  useEffect(() => {
    setHeaderHeight(
      headerRef ? (headerRef.current ? headerRef.current.clientHeight : 0) : 0
    );
  }, []);
  return (
    <div>
      <Header headerRef={headerRef} />
      <MotionWrapper>
        <div className="flex flex-col gap-y-16">
          <Section headerHeight={headerHeight} id="home" sectionTitle="Home">
            <Home />
          </Section>
          <Section
            headerHeight={headerHeight}
            id="profile"
            sectionTitle="Profile"
          >
            <Profile profileInfo={portfolio.profile} />
          </Section>
          <Section
            headerHeight={headerHeight}
            id="history"
            sectionTitle="History"
            maxWidth="max-w-full"
          >
            <History />
          </Section>
          <Section
            headerHeight={headerHeight}
            id="skills"
            sectionTitle="Skills"
          >
            <Skill
              skills={portfolio.skills}
              qualifications={portfolio.qualifications}
            />
          </Section>
          <Section
            headerHeight={headerHeight}
            id="works"
            sectionTitle="Works"
            maxWidth="max-w-[1000px]"
          >
            <Work works={portfolio.works} />
          </Section>
          <Section
            headerHeight={headerHeight}
            id="form"
            sectionTitle="お問い合わせ"
          >
            <Form />
          </Section>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default Layout;
