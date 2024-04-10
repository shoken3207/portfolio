import React from "react";

const SectionTemplate = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold pl-2 border-l-8 border-blue-600">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default SectionTemplate;
