import React from "react";
import Lottie from "lottie-react";
import faq from "../../assets/faq.json";
import { FAQ } from "../../utils/faq";
import FaqCard from "../FaqCard/FaqCard";

const Faq = () => {
  return (
    <section className="customContainer">
      <div className="pt-10 pb-28">
        <h1 className="text-title-md3 md:text-title-md4 xl:text-title-lg font-bold text-action-heading text-center">
          FAQ for Outsourcing Web Development
        </h1>
        <p className="text-action-desc text-center mt-4">
          We are more than a generic agency. Explore our Services and our
          Solutions for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center">
        <div>
          <Lottie animationData={faq} loop={true} />
        </div>
        <div>
          {FAQ.map((queue, index) => (
            <FaqCard key={index} queue={queue} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
