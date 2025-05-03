import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <About />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
