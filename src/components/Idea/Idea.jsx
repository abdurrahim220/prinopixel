import React from "react";

const Idea = () => {
  return (
    <div className="customContainer my-10 xl:my-16">
      <section className="overflow-hidden bg-[#4A42EA] rounded-xl">
        <div className="p-8 md:p-12 lg:px-16 lg:py-20">
          <div className="text-start ">
            <h2 className="text-title-md lg:text-title-md4 xl:text-title-lg font-bold text-primary-light">
              Have Any Project Idea
            </h2>

            <p className="text-primary-light font-medium md:mt-6 md:block  md:leading-relaxed text-title-sm md:text-title-sm2 xl:text-title-sm3 max-w-4xl">
              Prinopixel can help bring this idea to life by developing a
              user-friendly and responsive web application with modern design
              and robust functionality. Lets discuss about your offshore
              project. We can Help you by our skillful Global team. You can take
              a free counseling by taking a schedule.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="text-title-sm2 inline-block rounded-xl bg-primary-light px-4 py-2 md:px-6 md:py-4 xl:px-10  xl:py-6 font-semibold text-action-desc "
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Idea;
