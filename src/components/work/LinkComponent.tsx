import React from "react";

const LinkComponent = ({
  name,
  url,
  logoImage,
}: {
  name: string;
  url: string;
  logoImage?: string;
}) => {
  console.log("logo: ", logoImage);
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-start gap-x-1">
        {logoImage && <img className=" w-6 h-6" src={logoImage} alt="" />}
        <h4 className="font-bold text-base">{name}</h4>
      </div>
      <a
        className="w-full text-sm text-blue-600 tracking-normal break-words"
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        {url}
      </a>
    </div>
  );
};

export default LinkComponent;
