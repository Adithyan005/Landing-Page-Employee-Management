import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const background = {
    backgroundImage: `url()`,
  };

  const navigate=useNavigate();
  const handleclick=()=>{
    navigate('/about')
  }
  return (
    <main style={background}>
      <div className="ml-7 container min-h-[28rem] flex flex-col space-y-3 justify-center items-center">
        <h1 className="text-4xl font-semibold font-cursive text-center">
          A Comprehensive Employee Management Platform
        </h1>
        <h1 className="text-2xl font-cursive">
          Streamlining the businesses with an efficient platform
        </h1>
        <div className="pt-6">
        <button onClick={handleclick} className="bg-lightpink rounded-xl shadow-lg p-3">Explore</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
