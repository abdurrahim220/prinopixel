import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div class=" flex flex-col sm:flex-row xl:flex-col items-start ">
      <div class="order-1 sm:ml-6 xl:ml-0">
        <h3 class="pb-1 text-action-heading font-semibold">
          <span class="pb-1 block text-lg leading-6 text-action-subHeading">
            ReactJs
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <div class="prose prose-slate prose-sm text-action-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fuga
            quod dolorem aspernatur nostrum ut.
          </p>
        </div>
        <Link
          class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3   bg-accent-light text-accent-dark  mt-6"
          to="#"
        >
          Learn more
          <svg
            class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        </Link>
      </div>
      <img
        src="https://e1.pxfuel.com/desktop-wallpaper/129/578/desktop-wallpaper-reactjs-blog-react-js.jpg"
        alt=""
        class="mb-6 shadow-md rounded-lg bg-accent-light w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
        width="1216"
        height="640"
      />
    </div>
  );
};

export default BlogCard;
