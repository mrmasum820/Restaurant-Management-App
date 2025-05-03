import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MR's Kitchen | Home</title>
        <meta name="homepage" content="this is MR's Kitchen Homepage" />
      </Helmet>
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
