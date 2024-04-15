"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <div
      className="text-white text-2xl font-weight shadow-sm fixed top-3 left-3 z-30"
      onClick={() => router.back()}
    >
      ←
    </div>
  );
};

export default BackButton;
