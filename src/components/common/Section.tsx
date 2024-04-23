import React from "react";

const Section = ({
  sectionTitle,
  id,
  children,
  maxWidth,
  headerHeight,
}: {
  sectionTitle: string;
  id: string;
  children: React.ReactNode;
  maxWidth?: string;
  headerHeight?: number;
}) => {
  const maxWidthClass = maxWidth || "max-w-[800px]";
  return (
    <section
      id={id}
      style={headerHeight ? { paddingTop: `${headerHeight + 36}px` } : {}}
      className={`flex items-center justify-center w-full min-h-screen py-4`}
    >
      <div
        className={`w-11/12 ${maxWidthClass} mx-auto flex flex-col gap-y-10 sm:gap-y-16`}
      >
        <h2 className=" text-3xl font-bold text-center sm:text-4xl">
          {sectionTitle}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
