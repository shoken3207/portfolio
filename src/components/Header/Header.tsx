"use client";
import React, { useEffect, useRef, useState } from "react";
import NavigationComponent from "../NavigationComponent";
import LinkWrap from "../common/LinkWrap";

const Header = () => {
  return (
    <div className="pb-[80px]">
      <header
        className={`fixed top-0 z-10 w-full bg-white p-2 border-t-4 border-blue-400 shadow-md`}
      >
        <div className=" w-10/12 mx-auto max-w-3xl flex justify-between items-center transition-opacity">
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
    </div>
  );
};

export default Header;
