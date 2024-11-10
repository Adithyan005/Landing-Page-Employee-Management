import React from "react";

const Login = () => {
  return (
    <div className="">
      <div className="bg-red-50 w-max mx-auto mt-[6rem] rounded-xl shadow-lg">
        <form action="">
          <div className="flex flex-col gap-4 justify-center items-center p-5">
            <h1 className="text-xl">Let's Get Started</h1>
            <p className="text-sm">Sign in to Continue</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center gap-3 p-2">
              <label htmlFor="">Username</label>
              <input
                type="text"
                name="user"
                className="h-8 rounded-xl p-1 border-2 border-black"
              />
            </div>
            <div className="flex justify-center items-center gap-3 p-2">
              <label htmlFor="">Password</label>
              <input
                type="text"
                name="pass"
                className="h-8 rounded-xl p-1 border-2 border-black"
              />
            </div>
            <div className="flex justify-center items-center p-5">
              <button className="bg-white/70 rounded-md shadow-lg p-2">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
