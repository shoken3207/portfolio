"use client";
import React, { useState } from "react";
import LinkWrap from "../common/LinkWrap";
import Navigation from "./Navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const navItems = [
    {
      text: "Profile",
      href: "/#profile",
      iconName: "profile.svg",
    },
    {
      text: "History",
      href: "/#history",
      iconName: "history.svg",
    },
    {
      text: "Skills",
      href: "/#skills",
      iconName: "skills.svg",
    },
    {
      text: "Works",
      href: "/#works",
      iconName: "works.svg",
    },
    {
      text: "Form",
      href: "/#form",
      iconName: "form.svg",
    },
  ];
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const backgroundClass = isOpen ? "black" : "hidden";
  const mobileMenuClass = isOpen ? "translate-x-0" : "translate-x-[100%]";
  const pathname = usePathname();
  return (
    <div>
      {pathname.split("/")[1] !== "work" && (
        <div>
          <div
            onClick={() => setIsOpen(false)}
            className={`cursor-pointer fixed w-full h-screen bg-black top-0 left-0 z-20 opacity-50 ${backgroundClass}`}
          ></div>
          <div
            className={`fixed z-30 top-[4px] right-0 h-full bg-white flex flex-col min-w-36 max-w-96 w-[40%] transition:all duration-300  ${mobileMenuClass}`}
          >
            <LinkWrap href="/#home">
              <h1
                onClick={() => setIsOpen(false)}
                className="duration-300 cursor-pointer hover:opacity-50 transition-duration: 150ms flex flex-col gap-y-2 items-center my-4"
              >
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
            {navItems.map(({ text, href, iconName }) => (
              <LinkWrap key={text} href={href}>
                <div
                  onClick={() => setIsOpen(false)}
                  className="pl-4 py-2 w-full flex items-center gap-x-2 "
                >
                  <img className="w-4" src={`/icons/${iconName}`} alt="" />
                  <span>{text}</span>
                </div>
              </LinkWrap>
            ))}
          </div>
          <header
            className={`fixed top-0 z-10 w-full bg-white py-4 border-t-[3px] border-blue-400 shadow-sm shadow-blue-400/20`}
          >
            <div className=" w-11/12 mx-auto max-w-3xl flex justify-between items-center transition-opacity hidden]">
              <LinkWrap href="/#home">
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
              <div className="hidden md:block">
                <Navigation navItems={navItems} />
              </div>
              <div
                className="cursor-pointer block md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <img
                  className="w-10"
                  src="/icons/menu-svgrepo-com.svg"
                  alt=""
                />
              </div>
            </div>
          </header>
        </div>
      )}
    </div>
  );
};

export default Header;
