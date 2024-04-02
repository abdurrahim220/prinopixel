import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

const TestimonialSlider = () => {
  return (
    <section className="customContainer my-10">
      <div className="py-5">
        <h1 className="text-title-md3 md:text-title-md4 xl:text-title-lg font-bold text-action-heading text-center">
          What people think about{" "}
          <span className="bg-gradient-to-r from-pink-800 via-action-desc to-red-900 inline-block text-transparent bg-clip-text">
            PrinoPixel
          </span>
        </h1>
      </div>

      <div className="py-3 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
         <ReviewCard/>
         <ReviewCard/>
         <ReviewCard/>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
