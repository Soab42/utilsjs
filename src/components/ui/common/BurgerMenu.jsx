import React from "react";

export default function BurgerMenu({ onClick, active }) {
  return (
    <button className="flex flex-col gap-1 duration-500" onClick={onClick}>
      <div
        className={`w-7 h-1 bg-black duration-500 rounded-full ${
          active ? "rotate-45  translate-y-2" : "h-1"
        }`}
      ></div>
      <div
        className={`h-1  bg-black duration-500 rounded-full ${
          active ? "w-0 translate-x-4 " : "w-7"
        }`}
      ></div>
      <div
        className={` w-7 h-1 bg-black duration-500 rounded-full ${
          active ? "-rotate-[45deg]  -translate-y-2" : ""
        }`}
      ></div>
    </button>
  );
}
