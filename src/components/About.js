import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <>
      <div>About</div>
      <ProfileClass name="Hemanth Class"/>
    </>
  );
};

export default About;
