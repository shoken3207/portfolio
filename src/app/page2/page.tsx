import Header from "@/components/Header/Header";
import NavigationComponent from "@/components/NavigationComponent";
import WorkNav from "@/components/WorkNav";
import MotionWrapper from "@/components/motionWrapper/motionWrapper";
import { getWorks } from "@/libs/microcms";
import React from "react";

const page = async () => {
  const { contents } = await getWorks();
  return (
    <MotionWrapper>
      <Header />
      <NavigationComponent />
      <div>page2</div>
      <WorkNav works={contents} />
    </MotionWrapper>
  );
};

export default page;
