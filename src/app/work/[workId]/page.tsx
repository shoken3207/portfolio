import ImageGalleryComponent from "@/components/work/ImageGalleryComponent";
import LinkComponent from "@/components/work/LinkComponent";
import MotionWrapper from "@/components/motionWrapper/motionWrapper";
import SectionTemplate from "@/components/work/SectionTemplate";
import { getWork, getWorks } from "@/libs/microcms";
import React from "react";
import IngenuityPoint from "@/components/work/IngenuityPoint";
import IntersectionObserverWrap from "@/components/common/IntersectionObserverWrap";

type ImageType = { url: string; height: number; width: number };
type LinkType = {
  name: string;
  url: string;
  logoImage: ImageType;
};
export type IngenuityPointType = {
  outline: string;
  detail: string;
};

export const generateStaticParams = async () => {
  const { contents } = await getWorks();
  const paths = contents.map((work) => {
    return {
      workId: work.id,
    };
  });
  return [...paths];
};

const StaticDetailPage = async ({
  params: { workId },
}: {
  params: { workId: string };
}) => {
  const work = await getWork(workId);
  const images = work.images.map(({ url }: { url: string }) => {
    return { original: url, thumbnail: url };
  });
  console.log("work: ", work);

  return (
    <MotionWrapper>
      <div className="pt-[10px] pb-8 flex flex-col gap-y-4 bg-[#f5fbfd]">
        <ImageGalleryComponent images={images} />
        <h1 className=" w-11/12 max-w-3xl mx-auto  text-[28px] text-blue-400 font-bold">
          {work.title}
        </h1>
        <div className=" w-11/12 max-w-3xl mt-1 mx-auto">
          <div className="flex flex-col gap-4">
            <SectionTemplate title="概要">
              <p className=" whitespace-pre-wrap text-gray-600 text-[14px]">
                {work.desc}
              </p>
            </SectionTemplate>
            <SectionTemplate title="開発に至った経緯">
              <p className=" whitespace-pre-wrap text-gray-600 text-[14px]">
                {work.projectOrigin}
              </p>
            </SectionTemplate>
            <SectionTemplate title="開発人数・開発期間">
              <p className=" whitespace-pre-wrap text-gray-600 text-[14px]">
                {work.numberOfDevelopers}人で、 {work.developmentPeriod.value}
                {work.developmentPeriod.unit}
              </p>
            </SectionTemplate>
            <SectionTemplate title="使用言語など">
              <div className=" flex items-center gap-2 flex-wrap">
                {work.technologyUsed.technologyUsed.map(
                  (technology: string) => (
                    <span
                      key={technology}
                      className=" text-[13px] font-bold border border-gray-400 text-gray-600 px-[8px] py-[7px] rounded-[18px] min-w-16 inline-block text-center"
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>
            </SectionTemplate>
            <SectionTemplate title="リンク">
              <div className=" flex flex-col gap-y-2">
                {work.links.map(({ name, url, logoImage }: LinkType) => (
                  <LinkComponent
                    key={name}
                    name={name}
                    url={url}
                    logoImage={logoImage.url}
                  />
                ))}
              </div>
            </SectionTemplate>
            <SectionTemplate title="工夫した点">
              <div className=" flex flex-col gap-y-5">
                {work.ingenuityPoints.map(
                  ({ outline, detail }: IngenuityPointType) => (
                    <IntersectionObserverWrap
                      key={outline}
                      defaultClass=""
                      addClasses={[]}
                      removeClasses={["opacity-0"]}
                    >
                      <IngenuityPoint outline={outline} detail={detail} />
                    </IntersectionObserverWrap>
                  )
                )}
              </div>
            </SectionTemplate>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default StaticDetailPage;
