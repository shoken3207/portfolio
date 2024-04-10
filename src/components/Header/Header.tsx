"use client";
import React, { useEffect, useRef, useState } from "react";
import NavigationComponent from "../NavigationComponent";
import LinkWrap from "../common/LinkWrap";

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);
  let headerClass =
    "z-10 fixed w-full mb-6 bg-white p-2 border-t-4 border-blue-400 shadow-md";
  useEffect(() => {
    setHeaderHeight(headerRef.current?.clientHeight);
    // console.log("headerHeight: ", headerRef.current?.clientHeight);
  }, []);
  return (
    <header
      ref={headerRef}
      className={`${
        !headerHeight && `mb-[${headerHeight}px]`
      } z-10 fixed w-full mb-6 bg-white p-2 border-t-4 border-blue-400 shadow-md`}
    >
      <div className=" 1/12 mx-auto max-w-3xl flex justify-between items-center transition-opacity">
        <LinkWrap href="/page2">
          <h1 className="duration-300 text-4xl cursor-pointer hover:opacity-50 transition-duration: 150ms">
            <img
              className="w-16"
              src="/images/f_f_business_30_s512_f_business_30_0nbg.png"
              alt=""
            />
          </h1>
        </LinkWrap>
        <NavigationComponent />
      </div>
    </header>
  );
};

export default Header;
