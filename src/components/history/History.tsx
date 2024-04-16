"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./TimelineElement";

const History = ({ id }: { id: string }) => {
  const timeline = [
    {
      icon: <img src="/icons/works.svg" />,
      date: "2022年6月 ～ 現在進行",
      title: "アプリファクトリーはるni株式会社",
      subtitle: "エンジニアアルバイト",
      desc: "あるゲームの既存機能の改修や新機能の実装、管理ツールやwebサイトの作成など、幅広く携わらせていただいています。",
    },
    {
      icon: <img src="/icons/works.svg" />,
      date: "2023年8月",
      title: "株式会社MTI",
      subtitle: "7日間の夏インターンシップ",
      desc: "前半は、フロントエンド、バックエンド、マーケティングに関する講座、後半の3.5日程度で、健康に関するアプリの企画、要件定義、実装、発表などを行いました。",
    },
    {
      icon: <img src="/icons/works.svg" />,
      date: "2023年8月",
      title: "株式会社現場サポート",
      subtitle: "10日間の夏インターンシップ",
      desc: "Conneというサービスを、お客様の意見を汲み取ってフロントエンドからバックエンドまで改修しました。",
    },
    {
      icon: <img src="/icons/works.svg" />,
      date: "2023年9月",
      title: "GMOインターネットグループ株式会社",
      subtitle: "5日間の夏インターンシップ",
      desc: "ハッカソン形式で4~5人のチームを組んで、5日間の間に企画、要件定義、実装、発表を行いました。",
    },
    {
      icon: <img src="/icons/works.svg" />,
      date: "2023年10月",
      title: "GMOペパボ株式会社",
      subtitle: "3日間の秋インターンシップ",
      desc: "GMOレンシュというサービスの新機能をフロントエンドをメインで実装しました。",
    },
    {
      icon: <img src="/icons/works.svg" />,
      date: "2025年4月 ～",
      title: "サイボウズ株式会社",
      desc: "フロントエンドエンジニア職として入社予定です。",
    },
  ];
  return (
    <div id={id}>
      <VerticalTimeline layout="2-columns" lineColor="skyblue">
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
