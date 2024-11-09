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
      <div className="ml-7 container mt-10 md:min-h-[25rem] flex space-x-4 justify-center items-center ">
        <div className="flex flex-col justify-center max-md:text-center items-center gap-3">
          <h1 className="md:text-4xl text-sm font-semibold font-cursive text-center">
            A Comprehensive Employee Management Platform
          </h1>
          <h1 className="md:text-2xl text-[10px] font-cursive">
            Streamlining the businesses with an efficient platform
          </h1>
          <button
            onClick={handleclick}
            className="bg-lightpink max-md:text-[10px] rounded-xl shadow-lg p-1 md:p-3 hover:scale-110"
          >
            Explore
          </button>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/309/403/original/office-employee-with-ai-generated-free-png.png"
          alt=""
          className="md:w-[20rem] w-[7rem]"
        />
        <div className="pt-6"></div>
      </div>
    </main>
  );
};

export default Home;
