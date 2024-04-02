import React from "react";

const FaqCard = ({ queue,index }) => {
  const { question, answer } = queue;
  return (
    <div className="space-y-2">
      <details
        className="group [&_summary::-webkit-details-marker]:hidden mb-2"
        open={index === 0 ? true : false}
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-accent-light p-4 text-action-heading">
          <h2 className="font-medium">{question}</h2>

          <svg
            className="size-5 shrink-0 transition duration-300  group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 p-2 leading-relaxed transition duration-300 ease-in-out rounded-md bg-accent-light2 text-action-desc">
          {answer}
        </p>
      </details>
    </div>
  );
};

export default FaqCard;
