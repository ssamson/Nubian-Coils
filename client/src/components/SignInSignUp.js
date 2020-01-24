import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./SignInSignUp.css";

export default function SignInSignUp({ setUser }) {
  const container = useRef(null);

  const [email, setEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [accountType, setAccountType] = useState("salon");
  const history = useHistory();

  const handleLoginSubmit = async e => {
    e.preventDefault();
    const loginData = { email, password: loginPassword };
    const res = await axios.post("/api/user/login", loginData);
    if (res.data) {
      localStorage.setItem("token", res.data.token);
      const user = res.data.user;
      setUser(user);
      history.push(`/profile/${user._id}`);
    } else {
      alert("Invalid Credential");
    }
  };

  const handleRegisterSubmit = async e => {
    e.preventDefault();
    const res = await axios.post("/api/user/", {
      email,
      password: registerPassword,
      accountType
    });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
    history.push(`/profile/${res.data.user._id}`);
  };

  return (
    <div className="container sign-in-sign-up" ref={container}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleRegisterSubmit}>
          <h1>Create Account</h1>
          <select
            className="form-control"
            onChange={e => setAccountType(e.target.value)}
          >
            <option value="salon">Salon/Stylist</option>
            <option value="customer">Customer</option>
          </select>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={e => setRegisterPassword(e.target.value)}
          />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleLoginSubmit}>
          <h1>Sign in</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setLoginPassword(e.target.value)}
          />
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              className="ghost"
              id="signIn"
              onClick={() => {
                container.current.classList.remove("right-panel-active");
              }}
              type="button"
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              className="ghost"
              id="signUp"
              type="button"
              onClick={() => {
                container.current.classList.add("right-panel-active");
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
