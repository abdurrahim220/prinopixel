import React from "react";
import Hero from "../../components/Hero/Hero";
import OurServices from "../../components/ OurServices/ OurServices";
import Offers from "../../components/Offer/Offers";
import HomeForm from "../../components/HomeForm/HomeForm";
import Idea from "../../components/Idea/Idea";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";
import Faq from "../../components/Faq/Faq";
import Technology from "../../components/Technology/Technology";


const Home = () => {
  return (
    <div>
      <Hero />
      <OurServices />
      <Offers />
    
      <Technology />
      <Faq />
      <TestimonialSlider />
      <Idea />
      {/* <HomeForm /> */}
    </div>
  );
};

export default Home;
