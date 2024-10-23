import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const background = {
    backgroundImage: `url()`,
  };

  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/about");
  };
  return (
    <main style={background}>
      <div className="ml-7 container min-h-[28rem] flex space-x-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl font-semibold font-cursive text-center">
            A Comprehensive Employee Management Platform
          </h1>
          <h1 className="text-2xl font-cursive">
            Streamlining the businesses with an efficient platform
          </h1>
          <button
            onClick={handleclick}
            className="bg-lightpink rounded-xl shadow-lg p-3"
          >
            Explore
          </button>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/309/403/original/office-employee-with-ai-generated-free-png.png"
          alt=""
          className="w-[20rem]"
        />
        <div className="pt-6"></div>
      </div>
    </main>
  );
};

export default Home;
