"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button className=" text-cyan-400 text-xl" onClick={() => router.back()}>
      ＜ Back
    </button>
  );
};

export default BackButton;
