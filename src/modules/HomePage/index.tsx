"use client";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Skill />
      <Projects />
    </>
  );
};

export default HomePage;
