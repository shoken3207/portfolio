import BackButton from "@/components/BackButton";
import ImageGalleryComponent from "@/components/ImageGalleryComponent";
import NavigationComponent from "@/components/NavigationComponent";
import MotionWrapper from "@/components/motionWrapper/motionWrapper";
import { getWork, getWorks } from "@/libs/microcms";
import axios from "axios";
import React from "react";
import ReactImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";

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

const StaticDetailPage = async ({
  params: { workId },
}: {
  params: { workId: string };
}) => {
  // const paths2 = await generateStaticParams();
  // console.log("paths2: ", paths2);
  const work = await getWork(workId);
  const images = work.images.map(({ url }: { url: string }) => {
    return { original: url, thumbnail: url };
  });
  console.log("work: ", work);
  // await axios
  //   .get("https://4gcdh2tcw7.microcms.io/api/v1/portfolio", {
  //     headers: {
  //       "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY,
  //     },
  //   })
  //   .then((res) => console.log("res: ", res.data));
  return (
    <MotionWrapper>
      <BackButton />
      <NavigationComponent />
      <div>page3</div>
      <h1>{work.title}</h1>
      <p>{work.desc}</p>
      {/* <ReactImageGallery
        items={[]}
        // showFullscreenButton={false}
        // useBrowserFullscreen={false}
        // showPlayButton={false}
      /> */}
      <ImageGalleryComponent images={images} />
    </MotionWrapper>
  );
};

export default StaticDetailPage;
