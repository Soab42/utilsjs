import React from "react";
import { getName } from "../../provider/utils.js/getName";
import Bio from "./Bio";
import ProfileImage from "./ProfileImage";
export default function ProfileInfo({ info }) {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <ProfileImage author={info} />

      <div>
        <h3 className="text-2xl font-semibold dark:text-white lg:text-[28px]">
          {getName(info)}
        </h3>
        <p className="leading-[231%] lg:text-lg">{info?.email}</p>
      </div>

      <Bio info={info} />
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
}
