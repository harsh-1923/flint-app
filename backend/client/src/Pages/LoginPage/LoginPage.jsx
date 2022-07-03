import React, { useState, useContext } from "react";
import AuthServices from "../../Services/AuthServices.js";

import { useNavigate } from "react-router-dom";

import AuthProvider, { AuthContext } from "../../Context/AuthContext.js";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signin = () => {
    if (user.email === "" || user.password === "") return;
    AuthServices.signin(user).then((res) => {
      if (res.isAuthenticated) {
        console.log(authContext, "here");

        console.log(res);
        const { email, username, premium } = res.user;
        console.log(email, username, premium);

        const newUser = { email, username, premium };
        authContext.setUser(newUser);
        console.log(authContext.user);
        localStorage.setItem("user", JSON.stringify(newUser));
        navigate("/userhome");
      }
    });
  };

  return (
    <div>
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
      <button onClick={signin}>create user</button>
    </div>
  );
};

export default LoginPage;
