"use client";
import React from "react";
import { Chrono } from "react-chrono";

const History = ({ id }: { id: string }) => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];
  return (
    <div
      id={id}
      className="w-full min-h-screen flex items-center justify-center"
    >
      <Chrono items={items} mode="VERTICAL_ALTERNATING" />
    </div>
  );
};

export default History;
