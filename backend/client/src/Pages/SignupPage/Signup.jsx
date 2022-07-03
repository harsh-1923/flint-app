import React, { useEffect, useState } from "react";
import AuthServices from "../../Services/AuthServices.js";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signup = () => {
    // e.preventDefault();
    AuthServices.signup(user).then((data) => console.log(data));
  };

  return (
    <div className="signup-wrapper">
      <label> Username</label>
      <input
        onChange={handleChange}
        type="text"
        name="username"
        placeholder="Username"
      />
      <br />
      <label> Email</label>
      <input
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="Email"
      />
      <br />
      <label> Password</label>
      <input
        onChange={handleChange}
        type="text"
        name="password"
        placeholder="Password"
      />
      <br />
      <br />
      <button onClick={signup()}>create user</button>
    </div>
  );
};

export default Signup;
