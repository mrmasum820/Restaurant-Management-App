import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ bgImg, title, description }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={bgImg}
      bgImageAlt="menu banner"
      strength={-200}
    >
      <div className="hero h-[600px]">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center md:w-1/2 p-12 bg-[#151515] bg-opacity-60 ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
