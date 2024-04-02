import React from "react";
import Hero from "../../components/Hero/Hero";
import OurServices from "../../components/ OurServices/ OurServices";
import Offers from "../../components/Offer/Offers";
import Idea from "../../components/Idea/Idea";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";
import About from "../../components/AboutUs/About";
import Faq from "../../components/Faq/Faq";
import Technology from "../../components/Technology/Technology";


const Home = () => {
  return (
    <div>
      <Hero />
      <OurServices />
      <About/>
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
