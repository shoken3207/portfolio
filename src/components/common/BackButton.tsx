"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BackButton = ({ workId }: { workId?: string }) => {
  const router = useRouter();
  const [hasPrevPage, setHasPrevPage] = useState<Boolean>(true);
  useEffect(() => {
    setHasPrevPage(window.history.length > 1);
  }, []);
  return (
    <>
      {hasPrevPage ? (
        <img
          className="w-6 font-bold cursor-pointer sm:w-8 lg:w-10"
          src="/icons/back-svgrepo-com.svg"
          alt=""
          onClick={() => router.back()}
        />
      ) : (
        <img
          className="w-6 font-bold cursor-pointer sm:w-8 lg:w-10"
          src="/icons/back-svgrepo-com.svg"
          alt=""
          onClick={() => router.push(`/#${workId}`)}
        />
      )}
    </>
  );
};

export default BackButton;
