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
    <div className="flex flex-col items-center justify-start gap-y-8">
      <div className="flex  items-start justify-center gap-x-8">
        <img
          className=" w-[25%] aspect-square rounded-[50%]"
          src={profileImage?.url}
          alt=""
        />
        <div className="w-[60%] flex flex-col items-start">
          <table>
            <thead></thead>
            <tbody>
              <tr className="text-gray-600 text-xs">
                <td>{lastName_furigana}</td>
                <td>{firstName_furigana}</td>
              </tr>
              <tr className="text-gray-600 text-2xl font-bold">
                <td>{lastName}</td>
                <td>{firstName}</td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-[20px]">
            <span className=" font-bold text-[30px]">{age}</span>歳
            <span className="text-[12px] text-gray-600 ml-4">
              {birthdayToDate.getFullYear()}年{birthdayToDate.getMonth() + 1}月
              {birthdayToDate.getDate()}日生まれ
            </span>
          </h3>
        </div>
      </div>
      <div className="w-full">
        <p className="text-[14px] text-gray-600 whitespace-pre-wrap">
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
