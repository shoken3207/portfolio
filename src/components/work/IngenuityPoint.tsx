import { IngenuityPointType } from "@/app/work/[workId]/page";
import React from "react";

const IngenuityPoint = ({ outline, detail }: IngenuityPointType) => {
  return (
    <div className="flex flex-col gap-y-[2px]">
      <h4 className="font-bold text-2xl">{outline}</h4>
      <p className="font-base text-gray-500 whitespace-pre-wrap">{detail}</p>
    </div>
  );
};

export default IngenuityPoint;
