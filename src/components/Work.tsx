import { works } from "@/types/cms-types";
import IntersectionObserverWrap from "./common/IntersectionObserverWrap";
import LinkWrap from "./common/LinkWrap";

const Work = ({ works }: { works: works[] }) => {
  return (
    <div className="flex justify-center items-stretch flex-wrap gap-x-4 gap-y-8  sm:grid grid-cols-auto-fit-[250px] sm:gap-10">
      {works.map((work) => (
        <IntersectionObserverWrap
          key={work.id}
          defaultClass="transition-all duration-[800ms] translate-y-12 opacity-0"
          addClasses={[]}
          removeClasses={["translate-y-12", "opacity-0"]}
        >
          <div className=" w-full mx-auto max-w-96 flex flex-col gap-y-1.5 ">
            <div
              style={work.isAttention ? {} : { visibility: "hidden" }}
              className="flex justify-end items-center gap-x-1 -mb-1.5 "
            >
              <img
                className="w-[18px] md:w-[20px]"
                src="/icons/attention-sign-svgrepo-com.svg"
              />
              <span className=" text-red-600 font-bold text-normal md:text-xl">
                注目
              </span>
            </div>
            <LinkWrap href={`/work/${work.id}`}>
              <div className=" overflow-hidden w-full aspect-w-16 aspect-h-9 relative group">
                <div className="w-full h-full absolute top-0 left-0 z-[2]  transition-all duration-[400ms] pointer-events-none bg-black bg-opacity-0 group-hover:bg-opacity-30"></div>
                <img
                  className="w-full h-full transition-all duration-[400ms] group-hover:scale-[1.2] "
                  src={work.images[0].url}
                  alt=""
                />
              </div>
            </LinkWrap>
            <p className="text-center text-xl">{work.title}</p>
          </div>
        </IntersectionObserverWrap>
      ))}
    </div>
  );
};

export default Work;
