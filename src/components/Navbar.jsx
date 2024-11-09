import React from "react";
import logo from "../assets/1.png"


const Navbar = () => {
  return (
    <>
      <nav className="shadow-lg rounded-lg">
        <div className="flex justify-around gap-4 items-center">
            <div className="flex gap-1 justify-center items-center">
            <img src={logo} alt="" className="w-24"/>
            <h1 className="font-serif text-lg font-bold">Tango</h1>
            </div>
            <div className="flex items-center gap-6">
                <a href="/"><h1 className="hover:scale-110 font-serif text-md">Home</h1></a>
                
                <a href="/employees"><h1 className="hover:scale-125 font-serif text-md">Employees</h1></a>
                <a href="/login"><button className="bg-blue-800 text-white rounded-xl p-3 drop-shadow-lg hover:scale-110 font-serif text-md">Login</button></a>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
