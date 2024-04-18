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
    <div className="flex flex-col items-center justify-start gap-y-10">
      <div className="flex  items-center justify-start gap-x-4">
        <img
          className=" w-[30%] max-w-[120px] aspect-square rounded-[50%]"
          src={profileImage?.url}
          alt=""
        />
        <div className="w-[60%] flex flex-col items-start">
          <table>
            <thead></thead>
            <tbody >
              <tr className="text-gray-600 text-xs">
                <td className="px-1  text-[12px]">{lastName_furigana}</td>
                <td className="px-1  text-[12px]">{firstName_furigana}</td>
              </tr>
              <tr className="text-gray-600 text-2xl font-bold">
                <td className="px-1 text-[28px]">{lastName}</td>
                <td className="px-1 text-[28px]">{firstName}</td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-[22px]">
            <span className=" font-bold text-[30px]">{age}</span>歳
            <span className="text-[12px] text-gray-600 ml-4">
              {birthdayToDate.getFullYear()}年{birthdayToDate.getMonth() + 1}月
              {birthdayToDate.getDate()}日生まれ
            </span>
          </h3>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-y-6">
        <p className="text-[13px] text-gray-600 whitespace-pre-wrap">
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
