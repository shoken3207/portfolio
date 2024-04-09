import NavigationComponent from "@/components/NavigationComponent";
import MotionWrapper from "@/components/motionWrapper/motionWrapper";
import { getWork, getWorks } from "@/libs/microcms";
import axios from "axios";
import React from "react";

export const generateStaticParams = async () => {
  const { contents } = await getWorks();
  const paths = contents.map((work) => {
    return {
      workId: work.id,
    };
  });
  console.log(paths);
  return [...paths];
};

const StaticDetailPage = async ({ params }: { params: { workId: string } }) => {
  console.log("page3", params);
  // const paths2 = await generateStaticParams();
  // console.log("paths2: ", paths2);
  // const work = await getWork(workId);
  // console.log("work: ", work);
  // await axios
  //   .get("https://4gcdh2tcw7.microcms.io/api/v1/portfolio", {
  //     headers: {
  //       "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY,
  //     },
  //   })
  //   .then((res) => console.log("res: ", res.data));
  return (
    <MotionWrapper>
      <NavigationComponent />
      <div>page3</div>
    </MotionWrapper>
  );
};

export default StaticDetailPage;
