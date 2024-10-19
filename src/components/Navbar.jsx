import React from "react";
import logo from "../assets/1.png"


const Navbar = () => {
  return (
    <>
      <nav className="shadow-xl rounded-lg">
        <div className="flex justify-around gap-4 items-center">
            <div>
            <img src={logo} alt="" className="w-24"/>
            </div>
            <div className="flex items-center gap-6">
                <a href="/"><h1>Home</h1></a>
                
                <a href="/employees"><h1>Employees</h1></a>
                <a href="/login"><button className="bg-blue text-black rounded-xl p-3 drop-shadow-lg">Login</button></a>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
