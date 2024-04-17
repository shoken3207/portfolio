"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./TimelineElement";

const History = () => {
  const timeline = [
    {
      date: "2021年4月",
      title: `KCS鹿児島情報専門学校・北海道情報大学
入学`,
      images: ["/images/kcs.jfif", "/images/hiu.jfif"],
      links: [
        {
          name: "KCS鹿児島情報専門学校",
          url: "https://www.kcs.ac.jp/kagoshima/",
        },
        {
          name: "北海道情報大学",
          url: "https://www.do-johodai.ac.jp/",
        },
      ],
    },
    {
      date: "2022年6月 ～ 現在進行",
      title: "アプリファクトリーはるni株式会社",
      subtitle: "エンジニアアルバイト",
      desc: "あるゲームの既存機能の改修や新機能の実装、管理ツールやwebサイトの作成など、幅広く携わらせていただいています。",
      images: [],
      links: [{ name: "コーポレートサイト", url: "https://haru-ni.net" }],
    },
    {
      date: "2023年8月",
      title: "株式会社MTI",
      subtitle: "7日間の夏インターンシップ",
      desc: "前半は、フロントエンド、バックエンド、マーケティングに関する講座、後半の3.5日程度で、健康に関するアプリの企画、要件定義、実装、発表などを行いました。",
      images: ["/images/mti.png"],
      links: [
        { name: "コーポレートサイト", url: "https://www.mti.co.jp/" },
        { name: "制作物", url: "/work/qkbu6n74nh2" },
      ],
    },
    {
      date: "2023年8月",
      title: "株式会社現場サポート",
      subtitle: "10日間の夏インターンシップ",
      desc: "現場クラウドConneというサービスを、お客様の意見を汲み取ってフロントエンドからバックエンドまで改修しました。",
      images: ["/images/genba-support.png", "/images/conne.png"],
      links: [
        { name: "コーポレートサイト", url: "https://www.genbasupport.com/" },
        { name: "現場クラウドConne", url: "https://conne.genbasupport.com/" },
      ],
    },
    {
      date: "2023年9月",
      title: "GMOインターネットグループ株式会社",
      subtitle: "5日間の夏インターンシップ",
      desc: "ハッカソン形式で4~5人のチームを組んで、5日間の間に企画、要件定義、実装、発表を行いました。",
      images: ["/images/gmo.png"],
      links: [
        { name: "コーポレートサイト", url: "https://www.gmo.jp/" },
        { name: "制作物", url: "/work/emp9p4dctai9" },
      ],
    },
    {
      date: "2023年10月",
      title: "GMOペパボ株式会社",
      subtitle: "3日間の秋インターンシップ",
      desc: "GMOレンシュというサービスの新機能をフロントエンドをメインで実装しました。",
      images: ["/images/pepabo.png", "/images/gmo-rensyu.png"],
      links: [
        { name: "コーポレートサイト", url: "https://pepabo.com/" },
        { name: "GMOレンシュ", url: "https://renshu.com/" },
        {
          name: "インターン記事",
          url: "https://hr.pepabo.com/report/2023/11/22/9381",
        },
      ],
    },
    {
      date: "2025年3月",
      title: "KCS鹿児島情報専門学校・北海道情報大学",
      subtitle: "卒業予定",
      images: ["/images/kcs.jfif", "/images/hiu.jfif"],
      links: [
        {
          name: "KCS鹿児島情報専門学校",
          url: "https://www.kcs.ac.jp/kagoshima/",
        },
        {
          name: "北海道情報大学",
          url: "https://www.do-johodai.ac.jp/",
        },
      ],
    },
    {
      date: "2025年4月 ～",
      title: "サイボウズ株式会社",
      desc: "フロントエンドエンジニア職として入社予定です。",
      images: ["/images/cybozu.png", "/images/kintone.png"],
      links: [{ name: "コーポレートサイト", url: "https://cybozu.co.jp/" }],
    },
  ];
  return (
    <div className="vertical-timeline-element">
      <VerticalTimeline lineColor="skyblue" animate={false}>
        {timeline.map((timeline) => (
          <TimelineElement key={timeline.title} timeline={timeline} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default History;
