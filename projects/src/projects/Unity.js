import React, { forwardRef } from "react";

import "./css/Unity.css";
import { Badge } from "react-bootstrap";

// Images
import globe from "../assets/nasa-Q1p7bh3SHj8-unsplash.jpg";
import playstation from "../assets/igor-karimov-9AmKnNZw3GA-unsplash.jpg";

const Unity = forwardRef((props, ref) => {
  return (
    <div className="unity" ref={ref}>
      <div className="unity-background-card">
        <h1 id="title">
          Unity 3D and Reinforcement Learning{" "}
          <Badge variant="secondary">Tutorials</Badge>
        </h1>
        <img
          id="unity-image-background"
          src={playstation}
          alt="playstation controller"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
});

export default Unity;
