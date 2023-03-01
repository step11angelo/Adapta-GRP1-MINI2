import React, { useState } from "react";
import "../css/Login.css";

const Login = () => {
  const loginData = [
    {
      user: "admin",
      pass: "1234",
    },
  ];

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const changeUsernameHandler = (event) =>
    setEnteredUsername(event.target.value);

  const changePasswordHandler = (event) =>
    setEnteredPassword(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredUsername === loginData[0].user &&
      enteredPassword === loginData[0].pass 
    ) {
      console.log("Login Success");
    } else console.log("Login Denied");

    console.log(enteredUsername);
    console.log(enteredPassword);
    setEnteredUsername("");
    setEnteredPassword("");
  };
  return (
    <form
      className="loginForm"
      action="#"
      onSubmit={submitHandler}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          required
          placeholder="Enter username"
          onChange={changeUsernameHandler}
          value={enteredUsername}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          required
          placeholder="Enter password"
          onChange={changePasswordHandler}
          value={enteredPassword}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;
