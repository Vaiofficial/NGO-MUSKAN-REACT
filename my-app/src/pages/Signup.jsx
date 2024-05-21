import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const [showSecretKey, setShowSecretKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const navigate = useNavigate();

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
    if (role === "admin" && secretKey !== "Vaibhav") {
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
      setLoading(false);

      if (!res.ok) {
        // If response status is not okay, display error message
        setError(data.message);
      } else {
        // If signup successful, clear error and navigate to signin page
        setError(null);
        navigate("/signin");
      }
    } catch (error) {
      // Catch any network errors
      setLoading(false);
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-center my-7 text-3xl">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="user"
            value="user"
            checked={role === "user"}
            onChange={handleRoleChange}
          />
          <label htmlFor="user">User</label>
          <input
            type="radio"
            id="admin"
            value="admin"
            checked={role === "admin"}
            onChange={handleRoleChange}
          />
          <label htmlFor="admin">Admin</label>
        </div>
        <input
          type="text"
          placeholder="username"
          className="border rounded-lg p-3 focus:outline-none"
          id="username"
          onChange={handleChange}
        />
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
        {/* Conditional rendering for secret key field */}
        {showSecretKey && (
          <input
            type="password"
            placeholder="secret key"
            className="border rounded-lg p-3 focus:outline-none"
            id="secretKey"
            onChange={(e) => setSecretKey(e.target.value)}
          />
        )}
        <button
          disabled={loading}
          className="bg-slate-700 text-white uppercase rounded-lg p-3 font-semibold hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        {/* Google Login Page */}
        {/* <OAuth>

        </OAuth> */}
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account ?</p>
        <Link to={"/signin"}>
          <span className="text-red-600">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-600 mt-5">{error}</p>}
    </div>
  );
}
