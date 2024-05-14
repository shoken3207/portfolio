import { notojp } from "@/utils/font";
import React from "react";
import LinkWrap from "../common/LinkWrap";

const Navigation = ({
  navItems,
}: {
  navItems: { text: string; href: string; icon: React.ReactNode }[];
}) => {
  return (
    <nav>
      <ul className="flex items-center gap-x-8 ">
        {navItems.map(({ text, href, icon }) => (
          <li key={text}>
            <LinkWrap href={href}>
              <div className=" flex flex-col gap-y-[3px] items-center justify-center transition-all duration-300  group">
                {icon}
                <span
                  className={`${notojp.className} text-[16px] text-gray-900 transition-all duration-300 group-hover:text-blue-400 `}
                >
                  {text}
                </span>
              </div>
            </LinkWrap>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
