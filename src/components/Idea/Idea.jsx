import React from "react";

const Idea = () => {
  return (
    <div className="customContainer">
      <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Have Any Project Idea
            </h2>

            <p className="hidden  text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Prinopixel can help bring this idea to life by developing a
              user-friendly and responsive web application with modern design
              and robust functionality. They can assist in designing intuitive
              user interfaces, implementing secure user authentication,
              integrating search and messaging features, and ensuring
              scalability to accommodate growing user bases. Prinopixel can also
              provide ongoing support and maintenance to ensure the platform
              remains efficient and up-to-date with evolving community needs.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Idea;
