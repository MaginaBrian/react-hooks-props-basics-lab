import React from "react";
import user from "../data/user"; // Import default export
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio !== "" && <p>{props.bio}</p>}
      <img src={user.image} alt="I made this" /> // Use user.image
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;