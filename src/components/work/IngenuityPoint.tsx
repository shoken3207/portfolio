import { IngenuityPointType } from "@/app/work/[workId]/page";

const IngenuityPoint = ({ outline, detail }: IngenuityPointType) => {
  return (
    <div className="flex flex-col">
      <h4 className="font-bold text-[22px]">{outline}</h4>
      <p className="text-[14px] text-gray-600 whitespace-pre-wrap">{detail}</p>
    </div>
  );
};

export default IngenuityPoint;
