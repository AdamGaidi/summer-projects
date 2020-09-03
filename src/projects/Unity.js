import React, { forwardRef } from "react";

import "./css/Unity.css";
import { Badge } from "react-bootstrap";

// Images
import playstation from "../assets/igor-karimov-9AmKnNZw3GA-unsplash.jpg";
import ai from "../assets/artificial-intelligence.svg";

const Unity = forwardRef((props, ref) => {
  return (
    <div className="unity" ref={ref}>
      <div className="unity-background-card">
        <h1 id="title">
          Unity 3D and Reinforcement Learning{" "}
          <Badge variant="secondary">Tutorials</Badge>
        </h1>

        <div id="paragraph-background">
          <img src={ai} alt="icon illustrating AI" id="unity-icon" />
          <p id="unity-paragraph">
            For a long time, both Reinforcement Learning and the Unity game
            engine has been topics I've had an interest in familiarizing myself
            with. As a fun side project to my side projects I completed several
            simple tutorials on Unity, Unity ML and Reinforcement Learning.
            <br />
            <br />
            Agents trained through Reinforcement Learning in a virtual space,
            simulating some task, is an exciting field of research. Some notable
            platforms include Unity ML or NVIDIA Isaac. I decided to focus my
            efforts on Unity as it not only gives familiarity with a machine
            learning platform, but also a game engine and 3d development in
            general.
          </p>
        </div>

        <img
          id="unity-image-background"
          src={playstation}
          alt="playstation controller"
          width="100%"
          height="100%"
        />
      </div>

      <div id="unity-credit">
        <div>
          Icon made by{" "}
          <a href="https://www.flaticon.com/authors/monkik" title="monkik">
            monkik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          Image taken from{" "}
          <a href="https://www.unsplash.com" title="unsplash">
            Unsplash
          </a>
          {""} a website offering freely usable images and pictures.
        </div>
      </div>
    </div>
  );
});

export default Unity;
