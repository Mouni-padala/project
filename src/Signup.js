import React, { useState } from "react";
import "./App.css";
// import Signin from "./Signin";
import axios from "axios";
const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    status: "",
    roll: "",
  });
  const { name, email, number, password, status, roll } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const statusChangeHandler = (e) => {
    setData({ ...data, status: e.target.value });
  };
  
  const rollChangeHandler = (e) => {
    setData({ ...data, roll: e.target.value });
  };
  const submitHandler = async (e) => {
    console.log(data);
    const response = await axios.post(
        "http://localhost:3300/api/auth/register",
        data
      );
      console.log(response.data);
  };
  return (
    <div className="sign-page">
      <span className="title">Signup</span>
      <span className="field">Username:</span>
      <br />
      <input
        className="input"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={changeHandler}
      />
      <br />
      <span className="field">Email:</span>
      <br />
      <input
        className="input"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={changeHandler}
      />
      <br />
      <span className="field">Password:</span>
      <br />
      <input
        className="input"
        type="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={changeHandler}
      />
      <br />
      <span className="field">Mobile:</span>
      <br />
      <input
        className="input"
        type="number"
        name="number"
        placeholder="Enter your number"
        value={number}
        onChange={changeHandler}
      />
      <br />
      <label className="field">Status :</label>
      <select className="input" onChange={statusChangeHandler} value={status} name="status">
      <option value="">Select status</option>
        <option value="Hold">Hold</option>
        <option value="Block">Block</option>
        <option value="Active">Active</option>
      </select>
      <label className="field">Roll :</label>
      <select className="input" onChange={rollChangeHandler} value={roll} name="roll">
      <option value="">Select roll</option>
        <option value="Student">Student</option>
        <option value="Teacher">Teacher</option>
        <option value="Admin">Admin</option>
        <option value="Mentor">Mentor</option>
      </select>
      <br />
      <br />
      <button className="submit" onClick={submitHandler}>
        submit
      </button>
    </div>
  );
};
export default Signup;
