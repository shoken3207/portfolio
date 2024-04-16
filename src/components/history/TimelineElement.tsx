"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TimelineElement = ({
  timeline,
  index,
}: {
  timeline: {
    icon: React.JSX.Element;
    date: string;
    title: string;
    subtitle?: string;
    desc?: string;
  };
  index: number;
}) => {
  const { icon, date, title, subtitle, desc } = timeline;
  const { ref, inView } = useInView({ triggerOnce: true });
  const contentStyle =
    index === 0
      ? { background: "rgb(33, 150, 243)", color: "#fff" }
      : undefined;
  const arrowStyle =
    index === 0 ? { borderRight: "7px solid  rgb(33, 150, 243)" } : undefined;

  return (
    <div ref={ref}>
      <VerticalTimelineElement
        visible={inView}
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={arrowStyle}
        date={date}
        {...icon}
      >
        {title ? (
          <>
            <h3 className="vertical-timeline-element-title">{title}</h3>
            {subtitle && (
              <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
            )}
            {desc && <p>{desc}</p>}
          </>
        ) : undefined}
      </VerticalTimelineElement>
    </div>
  );
};

export default TimelineElement;
