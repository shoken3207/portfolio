import React from "react";

const InputArea = ({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-bold" htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputArea;
