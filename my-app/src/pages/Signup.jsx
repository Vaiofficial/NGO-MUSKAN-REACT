import React from "react";
import PageLayout from "../components/PageLayout";

const Signup = () => {
  return (
    <PageLayout>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="font-semibold text-center my-7 text-3xl">Sign Up</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="username"
            className="border rounded-lg p-3 focus:outline-none"
            id="username"
          />
          <input
            type="text"
            placeholder="email"
            className="border rounded-lg p-3 focus:outline-none"
            id="email"
          />
          <input
            type="text"
            placeholder="password"
            className="border rounded-lg p-3 focus:outline-none"
            id="password"
          />
          {/* Signup button */}
          <button className="bg-slate-700 text-white uppercase rounded-lg p-3 font-semibold hover:opacity-95 disabled:opacity-80">
            Register
          </button>
        </form>

        {/* Bottom text */}
        <div className="flex gap-2 mt-5">
          <p>Have an account ?</p>
          
            <span className="text-red-600">Sign in</span>
          
        </div>
      </div>
    </PageLayout>
  );
};

export default Signup;
