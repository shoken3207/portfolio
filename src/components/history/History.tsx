"use client";
import React from "react";
import { Chrono } from "react-chrono";

const History = ({ id }: { id: string }) => {
  console.log("history");
  const items = [
    {
      title: "2023年 8月1日 ~ 8月9日",
      cardTitle: "株式会社MTIの開発インターンシップ",
      url: "https://www.mti.co.jp/",
      cardDetailedText:
        "AWSを用いてのフロントエンドやバックエンド、マーケティングの講座を3日間受け、残りの4日間でテーマに沿ったアプリの企画、設計、開発、発表を5人グループで行いました。",
      media: {
        type: "IMAGE",
        source: {
          url: "/images/partner_mti_logo.png",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
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
