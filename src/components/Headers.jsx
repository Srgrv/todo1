import React from "react";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="posts">Posts</NavLink>
      <NavLink to="login">Login</NavLink>
    </header>
  );
};

export default Headers;
