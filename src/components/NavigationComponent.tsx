import Link from "next/link";
import React from "react";

const NavigationComponent = () => {
  return (
    <nav>
      <ul className="flex justify-start gap-x-2">
        <li>
          <Link href="/">page1</Link>
        </li>
        <li>
          <Link href="/page2">page2</Link>
        </li>
        <li>
          <Link href="/page3">page3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationComponent;
