import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featuredImg my-16 py-16">
      <SectionTitle
        subHeading="Check it out"
        heading="From Our Menu"
        headingColor="text-white"
      ></SectionTitle>

      <div className="md:flex items-center space-x-8 px-10">
        <div className="md:w-1/2">
          <img style={{ width: "648px" }} src={featuredImg} alt="" />
        </div>
        <div className="md:w-1/2 text-white">
          <h4>March 20, 2025</h4>
          <h3 className="text-xl uppercase my-2">Where can i get some?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos
            repudiandae iure nobis, fuga odio error a quam consequatur
            perspiciatis sequi non aspernatur consectetur officia? Doloribus id
            quia fugiat, quos ipsa earum, culpa totam esse sapiente dolorum
            maiores? Repudiandae, quam.
          </p>
          <button className="btn btn-outline border-0 border-b-2 uppercase mt-4">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
