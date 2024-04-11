import Link from "next/link";
import React from "react";
import LinkWrap from "../common/LinkWrap";

const Navigation = ({
  navItems,
}: {
  navItems: { text: string; href: string; iconName: string }[];
}) => {
  return (
    <nav>
      <ul className="flex items-center gap-x-4">
        {navItems.map(({ text, href, iconName }) => (
          <li key={text}>
            <LinkWrap href={href}>
              <div className=" flex gap-x-1 items-center transition-all duration-300 hover:text-blue-400">
                <img className="w-4" src={`/icons/${iconName}`} alt="" />
                <span className="text-[14px] font-bold">{text}</span>
              </div>
            </LinkWrap>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
