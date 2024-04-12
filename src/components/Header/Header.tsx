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
      text: "Skills",
      href: "#",
      iconName: "skills.svg",
    },
    {
      text: "Works",
      href: "/page2#works",
      iconName: "works.svg",
    },
    {
      text: "History",
      href: "#",
      iconName: "history.svg",
    },
    {
      text: "Form",
      href: "/page2#form",
      iconName: "form.svg",
    },
  ];
  return (
    <header
      className={`sticky top-0 z-10 w-full bg-white py-4 border-t-[3px] border-blue-400 shadow-sm shadow-blue-400/20`}
    >
      <div className=" w-11/12 mx-auto max-w-3xl flex justify-between items-center transition-opacity hidden]">
        <LinkWrap href="/page2">
          <h1 className="duration-300 cursor-pointer hover:opacity-50 transition-duration: 150ms flex items-center gap-x-1.5">
            <img
              className="w-12"
              src="/images/f_f_business_30_s512_f_business_30_0nbg.png"
              alt=""
            />
            <span className=" text-3xl font-bold text-gray-500">Portfolio</span>
          </h1>
        </LinkWrap>
        <Navigation navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
