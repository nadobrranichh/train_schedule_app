// import React from "react";
import { useState } from "react";
import LoginBackground from "../assets/login-bg.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          password,
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert("successfully logged in!");
        console.log(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        alert(`failed to log in: ${data.error}`);
        console.error(data.error);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="bg-black min-h-screen min-w-screen flex flex-col text-center items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${LoginBackground})` }}
      ></div>
      <p className="z-10 text-5xl font-bold text-white">Train Scheduler</p>
      <p className="z-10 mt-20 mb-5 text-3xl font-bold text-white">Log in</p>
      <input
        type="text"
        placeholder="Name"
        className="w-88 border border-black p-2 z-10 bg-white-t-subtle rounded rounded-xl mt-5 px-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        className="w-88 border border-black p-2 z-10 bg-white-t-subtle rounded rounded-xl mt-5 px-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-80 border-none z-10 bg-white-t text-black mt-8 px-8 rounded rounded-lg py-1 cursor-pointer"
        onClick={handleLogin}
      >
        Log in
      </button>
      <button
        className="z-10 mt-20 mb-5 text-2xl font-bold text-white block cursor-pointer"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
    </div>
  );
};

export default Login;
