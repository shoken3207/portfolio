"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <img
      className="w-6 font-bold cursor-pointer"
      src="/icons/back-svgrepo-com.svg"
      alt=""
      onClick={() => router.back()}
    />
  );
};

export default BackButton;
