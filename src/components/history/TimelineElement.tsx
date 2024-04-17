"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import LinkComponent from "../work/LinkComponent";
import IntersectionObserverWrap from "../common/IntersectionObserverWrap";

const TimelineElement = ({
  timeline,
}: {
  timeline: {
    date: string;
    title: string;
    subtitle?: string;
    desc?: string;
    images: string[];
    links: { name: string; url: string }[];
  };
}) => {
  const { date, title, subtitle, desc, images, links } = timeline;
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <IntersectionObserverWrap
        rootMargin="-150px"
        defaultClass="transition-all duration-[850ms] translate-y-10 opacity-0"
        addClasses={[]}
        removeClasses={["translate-y-10", "opacity-0"]}
      >
        <VerticalTimelineElement
          visible={inView}
          date={date}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          {title ? (
            <>
              <h3 className="vertical-timeline-element-title text-[20px] font-bold whitespace-pre-wrap sm:text-2xl">
                {title}
              </h3>
              {subtitle && (
                <h4 className="vertical-timeline-element-subtitle text-gray-600 text-base font-bold whitespace-pre-wrap sm:text-xl">
                  {subtitle}
                </h4>
              )}
              {desc && (
                <p className="text-gray-600 text-sm font-thin whitespace-pre-wrap sm:text-base">
                  {desc}
                </p>
              )}
              {images.length > 0 && (
                <div className="flex items-center gap-x-4 mt-4">
                  {images.map((image) => (
                    <div key={image} className="w-[45%] max-w-40 p-4 shadow-md">
                      <img className="w-full h-full" src={image} alt="" />
                    </div>
                  ))}
                </div>
              )}
              {links.length > 0 && (
                <div className="flex flex-col items-start gap-y-1 mt-4">
                  {links.map(({ name, url }) => (
                    <LinkComponent key={name} name={name} url={url} />
                  ))}
                </div>
              )}
            </>
          ) : undefined}
        </VerticalTimelineElement>
      </IntersectionObserverWrap>
    </div>
  );
};

export default TimelineElement;
