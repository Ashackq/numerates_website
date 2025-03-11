import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig.js";
import { FaEnvelope, FaLock, FaCheckCircle } from "react-icons/fa";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail("");
      setPassword("");
      setLoggedIn(true);
      props.handleLogin();
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-pink-500 mb-1">
          🎀 Your Certificates 🎀
        </h1>
        <h5 className="text-pink-400 mb-6">...are just a few clicks away</h5>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center border border-pink-300 rounded-lg p-2">
            <FaEnvelope className="text-pink-400 mr-2" />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full outline-none bg-transparent text-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center border border-pink-300 rounded-lg p-2">
            <FaLock className="text-pink-400 mr-2" />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full outline-none bg-transparent text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-pink-500 text-white w-full py-2 rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300"
          >
            ✨ Submit ✨
          </button>
        </form>

        {loggedIn && (
          <div className="flex items-center gap-2 text-green-500 mt-4">
            <FaCheckCircle />
            <Link to="/congo" className="font-semibold hover:underline">
              Get Certificates
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
