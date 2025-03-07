import React, { useState } from "react";
import axios from "axios";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    axios
      .post("http://localhost:5000/api/users/login", { email, password })
      .then((res) => {
        // Save token in local storage
        localStorage.setItem("token", res.data.token);
        console.log(res.data);

        if (res.data.user.type === "user") {
          window.location.href = "/";
        } else if (res.data.user.type === "admin") {
          window.location.href = "/admin";
        }
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  }

  return (
    <div className="w-full h-[100vh] pic-bg flex justify-center items-center">
      <div className="w-[400px] h-[400px] backdrop-blur-lg rounded-lg flex flex-col items-center justify-center relative">
        <h1 className="text-3xl p-[15px] text-white absolute top-[40px] text-center">
          Login
        </h1>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-[80%] bg-[#00000000] border-[1px] text-white border-white placeholder:text-white h-[50px] px-[5px] mb-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-[80%] bg-[#00000000] border-[1px] text-white border-white placeholder:text-white h-[50px] px-[5px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-[80%] absolute bottom-[40px] bg-gray-600 text-white h-[50px]"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;