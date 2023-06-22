import React, { useState } from "react";
import "./App.css";
import axios from "axios";
const Signin = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const loginChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const getdata = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3300/api/auth/login",
        details
      );
      console.log(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="sign-page">
      <span className="title2">Signin</span>
      <form>
        <span className="field">Email:</span>
        <br />
        <input
          className="input"
          type="email"
          name="email"
          onChange={loginChange}
          placeholder="Enter your email"
        />
        <br />
        <span className="field">Password:</span>
        <br />
        <input
          className="input"
          type="password"
          name="password"
          onChange={loginChange}
          placeholder="Enter your password"
        />
        <br />
        <br />
        <button onClick={getdata} className="submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default Signin;
