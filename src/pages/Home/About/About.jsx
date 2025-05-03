import React from "react";
import serviceImg from "../../../assets/home/chef-service.jpg";

const About = () => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage: `url(${serviceImg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center md:w-4/5 p-12 bg-[#f5f5f5] text-black">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">MR's Kitchen</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            facere, fuga porro fugiat ratione natus distinctio impedit culpa
            laudantium repudiandae non recusandae fugit, iusto optio sapiente
            vero aut asperiores excepturi, nemo inventore corporis blanditiis.
            Deleniti recusandae libero rem facilis amet?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
