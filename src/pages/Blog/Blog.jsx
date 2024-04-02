import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blog = () => {
  return (
    <section className="">
      <div className="customContainer py-20">
        <div className="my-10">
        <div class="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-action-heading">
            Recent Blogs
          </h1>
          <p class="mt-3 text-lg text-action-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto autem expedita aperiam magni. Reiciendis, incidunt!
          </p>
        </div>
        </div>
        <div className="my-5">
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 xl:gap-y-16 gap-x-6 xl:gap-8 items-start">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>

        <div className="py-10">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default Blog;
