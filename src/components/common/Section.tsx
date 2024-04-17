import React from "react";

const Section = ({
  sectionTitle,
  id,
  children,
}: {
  sectionTitle: string;
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      className="flex items-center justify-center w-full min-h-screen py-8"
    >
      <div className="w-11/12 max-w-3xl mx-auto flex flex-col gap-y-10">
        <h2 className=" text-3xl font-bold text-center">{sectionTitle}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
