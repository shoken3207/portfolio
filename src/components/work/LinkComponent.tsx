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
  return (
    <div className="w-full @container">
      <div className="flex flex-col w-full @[620px]:gap-y-1">
        <div className="flex items-center justify-start gap-x-1 @[620px]:gap-x-1.5 ">
          {logoImage && (
            <img
              className=" w-6 aspect-square @[620px]:w-[28px]"
              src={logoImage}
              alt=""
            />
          )}
          <h4 className="font-bold text-base @[620px]:text-[20px]">{name}</h4>
        </div>
        <a
          className=" text-sm text-blue-600 tracking-normal break-words @[620px]:text-[16px]"
          target="_blank"
          rel="noopener noreferrer"
          href={url}
        >
          {url}
        </a>
      </div>
    </div>
  );
};

export default LinkComponent;
