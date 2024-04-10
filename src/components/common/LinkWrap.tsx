import Link from "next/link";
import React from "react";

const LinkWrap = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return <Link href={href}>{children}</Link>;
};

export default LinkWrap;
