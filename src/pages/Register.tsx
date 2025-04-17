// import React from "react";
import RegisterBackground from "../assets/register-bg.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegistration = async () => {
    try {
      if (password !== passwordConfirm) {
        alert("Please ensure that your passwords are the same");
        return;
      }
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          password,
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert(`User created! Now log into your account with this data`);
        navigate("/");
      } else alert(`Error: ${data.error}`);
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  return (
    <div className="bg-black min-h-screen min-w-screen flex flex-col text-center items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${RegisterBackground})` }}
      ></div>
      <p className="z-10 text-5xl font-bold text-white">Train Scheduler</p>
      <p className="z-10 mt-20 mb-5 text-3xl font-bold text-white">Register</p>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-88 border border-black p-2 z-10 bg-white-t-subtle rounded rounded-xl mt-5 px-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your password"
        className="w-88 border border-black p-2 z-10 bg-white-t-subtle rounded rounded-xl mt-5 px-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your password again"
        className="w-88 border border-black p-2 z-10 bg-white-t-subtle rounded rounded-xl mt-5 px-4"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <button
        className="w-80 border-none z-10 bg-white-t text-black mt-8 px-8 rounded rounded-lg py-1 cursor-pointer"
        onClick={handleRegistration}
      >
        Register
      </button>
      <p className="z-10 mt-20 mb-5 text-lg font-bold text-white">
        You will have to log in with this data
      </p>
    </div>
  );
};

export default Register;
