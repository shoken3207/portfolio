import React from "react";

const Section = ({
  sectionTitle,
  id,
  children,
  maxWidth,
}: {
  sectionTitle: string;
  id: string;
  children: React.ReactNode;
  maxWidth?: string;
}) => {
  const maxWidthClass = maxWidth || "max-w-3xl";
  return (
    <section
      id={id}
      className="flex items-center justify-center w-full min-h-screen py-8"
    >
      <div
        className={`w-11/12 ${maxWidthClass} mx-auto flex flex-col gap-y-10`}
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