import React from "react";
import Button from "../components/Button";
import { laptop } from "../assets/images";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="max-container mt-[-300px] lg:flex-row flex justify-wrap items-center
       gap-10  "
      >
        <div className="flex-1 ">
          <img
            src={laptop}
            alt="laptop"
            width={900}
            height={700}
            className="rounded-full  "
          />
        </div>

        <div className="flex flex-col flex-1  ">
          <p className="text-white text-2xl">About the agency</p>
          <h2 className="text-white text-8xl font-bold">
            We're Top Notch & Best
            <br />
            <span className="text-[#0f9690]">
              {" "}
              Web Design & Dgital Marketing Agency{" "}
            </span>{" "}
          </h2>
          <p className="text-white  mt-7 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            mollitia a molestias voluptatibus illo dolor, quia rerum atque nam,
            possimus libero officia nulla incidunt quis repellendus esse ab
            molestiae error.
          </p>
          <p className=" text-slate-gray mt-4 info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            praesentium voluptatibus eos ea doloribus, magnam iste eum sed
            consequatur accusamus pariatur, dolorem excepturi in, quae nostrum
            aut? Dolor, obcaecati asperiores?
          </p>
          <div className="mt-11 flex flex-wrap gap-4 max-sm:justify-center">
            <Button label="Discover More" />
          </div>
        </div>
      </section>
      <section class="relative max-container flex overflow-x-hidden">
        <div>
          <h1
            className="text-white  whitespace-nowrap text-[120px] font-nunito font-bold animate-infinite-scroll flex justify-center items-center 
        mt-12"
          >
            Web Development - Sofware Web Design & Digital Marketing Agency
          </h1>
        </div>
        <div className=" ml-12">
          <h1
            className="text-white whitespace-nowrap text-[120px] font-nunito font-bold animate-infinite-scroll2 flex justify-center items-center 
        mt-12"
          >
            {""} Web Development - Sofware Web Design & Digital Marketing Agency
          </h1>
        </div>
      </section>
    </>
  );
};

export default About;
