"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";

const HeaderWrapper = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    setHeaderHeight(
      headerRef ? (headerRef.current ? headerRef.current.clientHeight : 0) : 0
    );
  }, []);
  return (
    <div
      style={
        pathname.split("/")[1] !== "work"
          ? { paddingTop: `${headerHeight}px`, position: "fixed" }
          : {}
      }
    >
      <div
        style={
          pathname.split("/")[1] !== "work"
            ? { paddingTop: `${headerHeight}px` }
            : {}
        }
        className="fixed z-1"
      ></div>
      <Header headerRef={headerRef} />
    </div>
  );
};

export default HeaderWrapper;
