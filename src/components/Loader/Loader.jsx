import React from "react";
import HashLoader from "react-spinners/HashLoader";
const Loader = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <HashLoader size={60} color="#36d7b7" />
    </div>
  );
};

export default Loader;
