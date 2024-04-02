import React from "react";
import Lottie from "lottie-react";
import technology from "../../assets/technology.json";
import { icons } from "../../utils/technology";

const Technology = () => {
  return (
    <section className=" bg-accent-light2">
      <div className="customContainer py-10">

    
      <div className="py-10">
        <h1 className="text-title-md3 md:text-title-md4 xl:text-title-lg font-bold text-action-heading text-center">
          Technology We Used
        </h1>
        <div className="max-w-5xl mx-auto">
          <p className="text-action-desc mt-4 text-center text-title-sm2 xl:text-title-sm3">
            It has become a prerequisite for companies to develop custom web
            application products to stay competitive. PrinoPixel's technical
            expertise use the most popular technology for development advance
            web application.{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-accent-light max-w-3xl h-40 rounded-lg mx-auto p-5 my-5">
        <div className="flex items-center justify-center gap-5">
          <div className="md:h-20 md:w-48 h-20 w-60">
            <Lottie animationData={technology} loop={true} />
          </div>
          <div>
            <h1 className="text-accent-dark font-semibold text-title-sm2 md:text-title-md3">
              We Use The most Update Technology{" "}
            </h1>
            <p className="text-action-desc text-title-sm md:text-title-sm2 font-medium">
              Entrusting the new technology to the most advanced programmers
              will ensure a more robust and high-performing system.
            </p>
          </div>
        </div>
      </div>
      <div className="my-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 lg:gap-10">
        {
          icons.map((icon, i) =>(
            <div key={i} className="bg-accent-light p-2 flex gap-4 items-center justify-center rounded-lg">
              <img src={icon.icon} alt="" srcSet="" />
              <h1 className="text-title-sm3 text-accent-dark font-bold">{icon.name}</h1>
            </div>
          ))
        }

      </div>  </div>
    </section>
  );
};

export default Technology;
