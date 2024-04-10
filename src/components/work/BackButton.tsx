"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    // <div className=" bg-black inline-block bg-opacity-40 text-white">
    <button
      className="py-1 pl-1 pr-3 bg-black text-base  text-white  hover:opacity-30 transition-all duration-300"
      onClick={() => router.back()}
    >
      ＜ Back
    </button>
    // </div>
  );
};

export default BackButton;
