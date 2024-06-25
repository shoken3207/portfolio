"use client";
import React from "react";
import BackButton from "../common/BackButton";

const BackButtonWrapper = ({ workId }: { workId: string }) => {
  return (
    <div className="bg-[#f5fbfd]  shadow-sm  sticky top-0 z-30">
      <div className="w-[95%] max-w-[1300px] mx-auto flex justify-start items-center py-1.5">
        <BackButton workId={workId} />
      </div>
    </div>
  );
};

export default BackButtonWrapper;
