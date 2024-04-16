"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./TimelineElement";

const History = ({ id }: { id: string }) => {
  const timeline = [
    {
      icon: <img src="/icons/works.svg" />,
      date: "2011 - present",
      title: "Creative Director",
      subtitle: "Miami, FL",
      desc: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      icon: <img src="/icons/works.svg" />,
      date: "2010 - 2011",
      title: "Art Director",
      subtitle: "San Francisco, CA",
      desc: "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
    },
    {
      icon: <img src="/icons/works.svg" />,
      date: "2008 - 2010",
      title: "Web Designer",
      subtitle: "Los Angeles, CA",
      desc: "User Experience, Visual Design",
    },
    {
      icon: <img src="/icons/works.svg" />,
      date: "2006 - 2008",
      title: "Web Designer",
      subtitle: "San Francisco, CA",
      desc: "User Experience, Visual Design",
    },
    {
      icon: <img src="/icons/works.svg" />,
      date: "April 2013",
      title: "Content Marketing for Web, Mobile and Social Media",
      subtitle: "Online Course",
      desc: "Strategy, Social Media",
    },
    {
      icon: <img src="/icons/works.svg" />,
      date: "November 2012",
      title: "Agile Development Scrum Master",
      subtitle: "Certification",
      desc: "Creative Direction, User Experience, Visual Design",
    },
    {
      icon: <img src="/icons/works.svg" />,
      date: "2002 - 2006",
      title: "Bachelor of Science in Interactive Digital Media Visual Imaging",
      subtitle: "Bachelor Degree",
      desc: "Creative Direction, Visual Design",
    },
  ];
  return (
    <div id={id}>
      <VerticalTimeline>
        {timeline.map((timeline, index) => (
          <TimelineElement
            key={timeline.title}
            timeline={timeline}
            index={index}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default History;
