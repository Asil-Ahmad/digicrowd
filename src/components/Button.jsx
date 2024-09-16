import React from "react";

const Button = ({ label }) => {
  return (
    <button className="text-white py-[17px] px-[39px] bg-[#0f969c] border-none rounded-[7px] text-[18px]">
      {label}
    </button>
  );
};

export default Button;
