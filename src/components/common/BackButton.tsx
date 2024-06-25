"use client";
import { useRouter } from "next/navigation";

const BackButton = ({ workId }: { workId?: string }) => {
  const router = useRouter();
  return (
    <>
      {window.history.length > 1 ? (
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
