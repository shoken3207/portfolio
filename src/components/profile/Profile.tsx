import { portfolio_profile } from "@/types/cms-types";
import React from "react";

const Profile = ({ profileInfo }: { profileInfo: portfolio_profile }) => {
  const { firstName, lastName, firstName_furigana, profileImage, birthday } =
    profileInfo;
  console.log("birthday: ", birthday);
  const birthdayToDate = new Date(birthday as string);
  console.log(birthdayToDate.getFullYear());
  return (
    <div
      className=" min-h-screen flex items-center justify-center"
      id="profile"
    >
      <h1>Profile</h1>
      <img
        className=" w-40 h-40 rounded-[50%]"
        src={profileImage?.url}
        alt=""
      />
      <table>
        <tr>
          <td>{firstName_furigana}</td>
          <td>{lastName}</td>
        </tr>
        <tr>
          <td>{firstName}</td>
          <td>{lastName}</td>
        </tr>
      </table>
      <p className="text-[14px] text-gray-600 whitespace-pre-wrap">
        {profileInfo.introduction}
      </p>
    </div>
  );
};

export default Profile;
