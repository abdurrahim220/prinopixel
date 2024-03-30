import React from "react";
import Hero from "../../components/Hero/Hero";
import OurServices from "../../components/ OurServices/ OurServices";
import Offers from "../../components/Offer/Offers";
import HomeForm from "../../components/HomeForm/HomeForm";


const Home = () => {
  return (
    <div>
      <Hero />
      <OurServices />
      <Offers />
      <HomeForm />
    </div>
  );
};

export default Home;
