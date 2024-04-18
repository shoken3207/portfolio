import React from "react";
import LinkComponent from "../work/LinkComponent";
import { portfolio_profile } from "@/types/cms-portfolio-types";

const Profile = ({ profileInfo }: { profileInfo: portfolio_profile }) => {
  const {
    firstName,
    lastName,
    firstName_furigana,
    lastName_furigana,
    profileImage,
    birthday,
    links,
  } = profileInfo;
  const today = new Date();
  const birthdayToDate = new Date(birthday as string);
  const thisYearsBirthday = new Date(
    today.getFullYear(),
    birthdayToDate.getMonth(),
    birthdayToDate.getDate()
  );
  let age = today.getFullYear() - birthdayToDate.getFullYear();
  if (today < thisYearsBirthday) {
    age--;
  }
  return (
    <div className="w-[95%] mx-auto flex flex-col items-start justify-start gap-y-10 sm:gap-y-14 lg:w-full">
      <div className="w-full flex  items-center justify-start gap-x-4">
        <img
          className=" w-[20%] min-w-[96px] max-w-[130px] aspect-square rounded-[50%]"
          src={profileImage?.url}
          alt=""
        />
        <div className="w-[60%] flex flex-col items-start">
          <table>
            <thead></thead>
            <tbody>
              <tr className="text-gray-600 text-[12px] sm:text-[16px]">
                <td className="px-1">{lastName_furigana}</td>
                <td className="px-1">{firstName_furigana}</td>
              </tr>
              <tr className="text-gray-600  text-[26px] font-bold sm:text-[32px]">
                <td className="px-1">{lastName}</td>
                <td className="px-1">{firstName}</td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-[22px] sm:text-[24px]">
            <span className=" font-bold text-[28px] sm:text-[35px]">{age}</span>
            歳
            <span className="text-[12px] text-gray-600 ml-3 sm:text-[14px]">
              {birthdayToDate.getFullYear()}年{birthdayToDate.getMonth() + 1}月
              {birthdayToDate.getDate()}日生まれ
            </span>
          </h3>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-6 sm:gap-y-8">
        <p className="text-[13px] text-gray-600 whitespace-pre-wrap sm:text-[16px]">
          {profileInfo.introduction}
        </p>
        <div className="flex flex-col gap-y-2">
          {links.map(({ name, url, logoImage }) => (
            <LinkComponent
              key={name}
              name={name}
              url={url}
              logoImage={logoImage.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
