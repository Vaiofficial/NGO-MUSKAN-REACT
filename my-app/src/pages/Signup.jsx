import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate  } from "react-router-dom";
// import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const [showSecretKey, setShowSecretKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    if (e.target.value === "admin") {
      setShowSecretKey(true); // Show the secret key field if role is admin
    } else {
      setShowSecretKey(false); // Hide the secret key field if role is not admin
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If role is admin and secret key is incorrect, show alert
    if (role === "admin" && secretKey !== process.env.REACT_APP_ADMIN_SECRET_KEY) {
      alert("Invalid Admin");
      return; // Stop execution if secret key is incorrect
    }
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, role }),
      });
      const data = await res.json();
      setMsg(res.message);
      setLoading(false);

      if (!res.ok) {
        // If response status is not okay, display error message
        setError(data.message);
      } else {
        // If signup successful, clear error and navigate to signin page
        setError(null);
        setMsg("Email Sent Successfully!");
        // navigate("/signin");
      }
    } catch (error) {
      // Catch any network errors
      setLoading(false);
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-center my-7 text-3xl font-montserrat">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="user"
            value="user"
            className="font-roboto"
            checked={role === "user"}
            onChange={handleRoleChange}
          />
          <label className="font-roboto" htmlFor="user">
            User
          </label>
          <input
            type="radio"
            id="admin"
            value="admin"
            className="font-roboto"
            checked={role === "admin"}
            onChange={handleRoleChange}
          />
          <label className="font-roboto" htmlFor="admin">
            Admin
          </label>
        </div>
        <input
          type="text"
          placeholder="username"
          className="border rounded-lg p-3 focus:outline-none font-roboto"
          id="username"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          className="border rounded-lg p-3 focus:outline-none font-roboto"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border rounded-lg p-3 focus:outline-none font-roboto"
          id="password"
          onChange={handleChange}
        />
        {/* Conditional rendering for secret key field */}
        {showSecretKey && (
          <input
            type="password"
            placeholder="secret key"
            className="border rounded-lg p-3 focus:outline-none font-roboto"
            id="secretKey"
            onChange={(e) => setSecretKey(e.target.value)}
          />
        )}
        <button
          disabled={loading}
          className="bg-slate-700 text-white uppercase rounded-lg p-3 font-semibold hover:opacity-95 disabled:opacity-80 font-roboto"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        {/* Google Login Page */}
        {/* <OAuth>

        </OAuth> */}
      </form>
      <div className="flex gap-2 mt-5">
        <p className="font-roboto">Have an account ?</p>
        <Link to={"/signin"}>
          <span className="text-red-600 font-roboto">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-blue mt-5 font-roboto">{error}</p>}
      {msg && (
        <p className="text-green-700 mt-5 font-roboto">
          Email Sent Successfully
        </p>
      )}
    </div>
  );
}
