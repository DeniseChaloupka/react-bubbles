import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch(err => console.error(err));
  };

  return (    
    <div className="SignIn">
      <div>
      <h1>It's some small <em>Bubbles</em> after all!</h1>
      <hr/>
    </div>
      <form className="login-form" onSubmit={login}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={user.username}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
        </div>
        <div>
          <button className="enter">Login</button>
        </div>
      </form>
    </div>
  );
};
export default Login;