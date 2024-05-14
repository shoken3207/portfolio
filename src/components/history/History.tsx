"use client";
import { portfolio_history } from "@/types/cms-types";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./TimelineElement";

const History = ({ history }: { history: portfolio_history[] }) => {
  return (
    <div className="vertical-timeline-element">
      <VerticalTimeline lineColor="skyblue" animate={false}>
        {history.map((history, index) => (
          <TimelineElement key={history.title + index} timeline={history} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default History;
