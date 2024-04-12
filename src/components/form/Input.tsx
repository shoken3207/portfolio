import React from "react";

const Input = ({
  placeholder,
  type,
  id,
  value,
  required,
  handleChange,
}: {
  placeholder: string;
  type?: string;
  id: string;
  value: string;
  required: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      className=" px-4 py-2 border-none w-full rounded-[10px] outline-none"
      id={id}
      type={type ? type : "text"}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Input;
