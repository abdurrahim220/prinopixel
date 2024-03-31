import React from "react";
import Hero from "../../components/Hero/Hero";
import OurServices from "../../components/ OurServices/ OurServices";
import Offers from "../../components/Offer/Offers";
import HomeForm from "../../components/HomeForm/HomeForm";
import Idea from "../../components/Idea/Idea";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurServices />
      <Offers />
      <Idea />
      {/* <HomeForm /> */}
      <TestimonialSlider />
    </div>
  );
};

export default Home;
