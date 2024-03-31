import React from "react";
import { services } from "../../utils/service";

const OurServices = () => {
  return <div className="customContainer text-white py-12">
    <div className="text-center space-y-5 text-black">
      <h4>Our Services</h4>
      <h2 className="text-2xl font-bold">Enhancing Creativity, Step by Step.</h2>
    </div>

    <div  className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
      {
        services.map((item,index)=><div key={index} className="max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-3">
        <img src={item.icon} className="size-12" alt="" />
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {item.desc}
        </p>
        
      </div>)
      }
      
    </div>

  </div>;
};

export default OurServices;
