import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in the empty spaces");
      return;
    }

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch("https://blog-app-ve13.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful");
        setUserInfo(data);
        setRedirect(true);
      } else {
        alert(data.message || "Login failed. Wrong credentials.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  if (redirect) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 bg-white">
      <h1 className="text-3xl font-semibold mb-6 text-center">Login</h1>

      <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-black rounded-md h-[45px] mb-4 px-4 text-sm font-light"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-black rounded-md h-[45px] mb-4 px-4 text-sm font-light"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white h-[45px] rounded-md hover:bg-gray-900 transition"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-sm font-normal text-center">
        Don’t have an account?{" "}
        <Link to="/signup" className="border-b-2 border-black hover:text-gray-700">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
