"use client";
import React, { useEffect, useRef, useState } from "react";
import NavigationComponent from "../NavigationComponent";
import LinkWrap from "../common/LinkWrap";
import Navigation from "./Navigation";

const Header = () => {
  const navItems = [
    {
      text: "Profile",
      href: "/page2/#profile",
      iconName: "profile.svg",
    },
    {
      text: "History",
      href: "/page2#history",
      iconName: "history.svg",
    },
    {
      text: "Skills",
      href: "/page2#skills",
      iconName: "skills.svg",
    },
    {
      text: "Works",
      href: "/page2#works",
      iconName: "works.svg",
    },
    {
      text: "Form",
      href: "/page2#form",
      iconName: "form.svg",
    },
  ];
  return (
    <div className="w-full h-screen bg-black sticky top-0 left-0 z-20">
      <header
        className={` top-0 z-10 w-full bg-white py-4 border-t-[3px] border-blue-400 shadow-sm shadow-blue-400/20`}
      >
        <div className=" w-11/12 mx-auto max-w-3xl flex justify-between items-center transition-opacity hidden]">
          <LinkWrap href="/page2#home">
            <h1 className="duration-300 cursor-pointer hover:opacity-50 transition-duration: 150ms flex items-center gap-x-1.5">
              <img
                className="w-12"
                src="/images/f_f_business_30_s512_f_business_30_0nbg.png"
                alt=""
              />
              <span className=" text-3xl font-bold text-gray-500">
                Portfolio
              </span>
            </h1>
          </LinkWrap>
          <Navigation navItems={navItems} />
        </div>
        <div className="fixed top-0 left-0 h-full bg-white flex flex-col min-w-36 z-10">
          {navItems.map(({ text, href, iconName }) => (
            <LinkWrap key={text} href={href}>
              <div className="pl-2 py-2 w-full flex items-center gap-x-2 ">
                <img className="w-4" src={`/icons/${iconName}`} alt="" />
                <span>{text}</span>
              </div>
            </LinkWrap>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Header;
