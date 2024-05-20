import React, { useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const {
  signInStart,
  signInFailure,
  signInSuccess,
} = require("../redux/user/userSlice");

export default function SignIn() {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //spread operator ka use kar rhe hai , jab user let username field mai kuch likha and dusre field mai likhega to dusre field ka data hatega nahi.
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    //preventdefault se loading effect handle karrhe h , signup click karne par jo hota hai.
    e.preventDefault();
    try {
      // setLoading(true);
      dispatch(signInStart());
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // setLoading(false);
        // setError(data.message);
        dispatch(signInFailure(data.message));
        return;
      }
      // setLoading(false);
      // setError(null)
      dispatch(signInSuccess(data));
      //successfully signup hua to login page par redirect kar dere hai.
      navigate("/");
    } catch (error) {
      // setLoading(false)
      // setError(error.message);
      dispatch(signInFailure(error.message));
    }
  };
  console.log(formData);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-center my-7 text-3xl">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <input
          type="text"
          placeholder="email"
          className="border rounded-lg p-3 focus:outline-none"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border rounded-lg p-3 focus:outline-none"
          id="password"
          onChange={handleChange}
        />
        {/* Signup button */}
        <button
          disabled={loading}
          className="bg-slate-700 text-white uppercase rounded-lg p-3 font-semibold hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>

      {/* Bottom text */}
      <div className="flex gap-2 mt-5">
        <p>Don't have an account ?</p>
        <Link to={"/signup"}>
          <span className="text-red-600">Register</span>
        </Link>
      </div>
      {error && <p className="text-red-600 mt-5">{error}</p>}
    </div>
  );
}
