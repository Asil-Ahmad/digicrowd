import React from "react";
import { aside } from "../constants";

const Sticky = () => {
  return (
    <div className="flex flex-col gap-[100px] mt-[303px] left-0 fixed">
      {aside.map((item) => (
        <a href={item.href} key={item.label}>
          <img
            src={item.label}
            alt="label"
            width={40}
            height={40}
            className="bg-white object-contain rounded-[999px] border-[0px] outline-[0px]   "
          />
        </a>
      ))}
    </div>
  );
};

export default Sticky;
