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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
