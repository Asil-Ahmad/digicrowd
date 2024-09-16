import React from "react";
import Button from "../components/Button";
import { hero1, hero2 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex-wrap flex xl:flex-row flex-col justify-center max-container min-h-screen gap-10"
    >
      <div
        className="relative xl:w-2/5 flex-1 flex flex-col justify-center items-start
        w-full max-xl:padding-x pt-28"
      >
        <h1 className="mt-10 z-10 font-roboto text-white text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          Lucknow's Top{" "}
          <span className="text-[#0f9690]">Digital Marketing</span> <br />
          agency
        </h1>
        <p className="text-[18px] leading-8 mt-6 mb-10 text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          molestiae asperiores est similique unde eligendi!
        </p>
        <Button label="Get Started Now" />
      </div>

      <div className=" relative flex-2 flex-wrap justify-center items-center ">
        <img
          src={hero1}
          alt="hero1"
          width={336}
          height={1063}
          className="grayscale"
        />
      </div>
      <div className="relative flex-2 flex-wrap justify-center items-center">
        <img
          src={hero2}
          alt="hero2"
          width={682}
          height={1063}
          className="grayscale"
        />
      </div>
    </section>
  );
};

export default Hero;
