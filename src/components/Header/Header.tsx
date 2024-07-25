"use client";
import { notojp } from "@/utils/font";
import { usePathname } from "next/navigation";
import { RefObject, forwardRef, useEffect, useState } from "react";
import LinkWrap from "../common/LinkWrap";
import Form from "../common/icons/Form";
import History from "../common/icons/History";
import Profile from "../common/icons/Profile";
import Skill from "../common/icons/Skill";
import Work from "../common/icons/Work";
import Navigation from "./Navigation";

const Header = forwardRef(
  ({ headerRef }: { headerRef: RefObject<HTMLDivElement> }) => {
    const navItems = [
      {
        text: "プロフィール",
        href: "/#profile",
        icon: <Profile width="w-[20px]" height="h-[20px]" />,
      },
      {
        text: "沿革",
        href: "/#history",
        icon: <History width="w-[20px]" height="h-[20px]" />,
      },
      {
        text: "開発スキル",
        href: "/#skills",
        icon: <Skill width="w-[20px]" height="h-[20px]" />,
      },
      {
        text: "開発実績",
        href: "/#works",
        icon: <Work width="w-[20px]" height="h-[20px]" />,
      },
      {
        text: "お問い合わせ",
        href: "/#form",
        icon: <Form width="w-[20px]" height="h-[20px]" />,
      },
    ];
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const [showHeader, setShowHeader] = useState<Boolean>(false);
    const backgroundClass = isOpen ? "black" : "hidden";
    const mobileMenuClass = isOpen ? "translate-x-0" : "translate-x-[-100%]";
    const isShowClass = showHeader
      ? "opacity-1 transition-all duration-300"
      : "opacity-0 transition-all duration-300";

    useEffect(() => {
      const handleScroll = () => {
        setShowHeader(window.scrollY > 300);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
      <div className={`${isShowClass}`}>
        {pathname.split("/")[1] !== "work" && (
          <div>
            <div
              onClick={() => setIsOpen(false)}
              className={`cursor-pointer fixed w-full h-screen bg-black top-0 left-0 z-20 opacity-50 ${backgroundClass}`}
            ></div>
            <div
              className={`fixed z-30 top-[4px] left-0 h-full pt-3 bg-white flex flex-col gap-y-4 min-w-36 max-w-[250px] w-[65%] transition:all duration-300  ${mobileMenuClass}`}
            >
              <LinkWrap href="/#">
                <h1
                  onClick={() => setIsOpen(false)}
                  className="duration-300 cursor-pointer hover:opacity-50 transition-duration: 150ms flex flex-col gap-y-1.5 items-center my-4"
                >
                  <img
                    className="w-14"
                    src="/images/f_f_business_30_s512_f_business_30_0nbg.png"
                    alt=""
                  />
                  <span className=" text-[34px] font-bold text-black">
                    Portfolio
                  </span>
                </h1>
              </LinkWrap>
              <div className="flex flex-col gap-y-1 ">
                {navItems.map(({ text, href, icon }) => (
                  <LinkWrap key={text} href={href}>
                    <div
                      onClick={() => setIsOpen(false)}
                      className="pl-6 py-2 w-full flex items-center gap-x-3 text-[24px] font-[500] group"
                    >
                      {icon}
                      <span
                        className={`${notojp.className}   transition-all duration-300 group-hover:text-blue-400`}
                      >
                        {text}
                      </span>
                    </div>
                  </LinkWrap>
                ))}
              </div>
            </div>
            <header
              ref={headerRef}
              className={`fixed top-0 z-10 w-full bg-white py-4 border-t-[3px] border-blue-400 shadow-sm shadow-blue-400/20`}
            >
              <div className=" w-11/12 mx-auto max-w-[1000px] flex justify-between items-center transition-opacity hidden]">
                <LinkWrap href="/#home">
                  <h1 className="duration-300 cursor-pointer hover:opacity-50 transition-duration: 150ms flex items-center justify-start gap-x-2 sm:gap-x-[10px] lg:gap-x-3">
                    <img
                      className=" w-10 sm:x-12 lg:w-14"
                      src="/images/f_f_business_30_s512_f_business_30_0nbg.png"
                      alt=""
                    />
                    <span
                      className={`text-[26px] font-[500] sm:text-[30px] lg:text-[34px] text-black ${notojp.className}`}
                    >
                      Portfolio
                    </span>
                  </h1>
                </LinkWrap>
                <div className="hidden lg:block">
                  <Navigation navItems={navItems} />
                </div>
                <div
                  className="cursor-pointer block lg:hidden"
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
  }
);

export default Header;
Header.displayName = "Header";
