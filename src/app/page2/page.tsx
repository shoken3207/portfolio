import Header from "@/components/Header/Header";
import NavigationComponent from "@/components/NavigationComponent";
import MotionWrapper from "@/components/motionWrapper/motionWrapper";
import React from "react";

const page = () => {
  return (
    <MotionWrapper>
      <Header />
      <NavigationComponent />
      <div>page2</div>
    </MotionWrapper>
  );
};

export default page;
