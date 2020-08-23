import React, { forwardRef, useRef, useEffect, useState } from "react";

// Stylesheet
import "./css/Astral.css";

// Components
import AstralFadeText from "../components/AstralFadeText";
import AstralFadeHeader from "../components/AstralFadeHeader";

// Images
import aurora from "../assets/johny-goerend-Oz2ZQ2j8We8-unsplash.jpg";
import takeoff from "../assets/nasa-n463SoeSiVY-unsplash.jpg";
import satellite from "../assets/nasa-yZygONrUBe8-unsplash.jpg";
import astronaut from "../assets/nasa-OLlj17tUZnU-unsplash.jpg";

const Astral = forwardRef((props, ref) => {
  return (
    <div className="astral" ref={ref}>
      <div className="astral-title">Astral</div>
      <div className="astral-subtitle">Hypergraph Visualization Tool</div>
      <div className="content-container" id="aurora-background">
        <div id="astral-text-left">
          <AstralFadeHeader
            text="Vision illuminated by inspiration"
            styling={"aurora-header"}
          />
          <AstralFadeText
            styling="aurora-text"
            text="The end of a project begets the start of another.
            In a world of unlimited challenges and enormous human potential,
             the most difficult part is finding an area to focus your efforts.
             Following my work on the literature review I felt inspired to keep going with the theme.
             The vision of my next project presented itself as a natural progression to my summer, reading 
             about theses mathematical constructs from sources heavily engrained in academia I felt a great desire
             to bring them to a different context."
          />
        </div>
        <img src={aurora} id="astral-image-right" alt="aurora borealis" />
      </div>

      <div className="content-container">
        <div id="astral-text-right">
          <AstralFadeHeader
            text="Explore the unknown"
            styling={"takeoff-header"}
          />
          <AstralFadeText styling={"takeoff-text"} text="" />
        </div>
        <img src={takeoff} id="astral-image-left" alt="rocket launch" />
      </div>

      <div className="content-container" id="satellite-background">
        <div id="astral-text-left">
          <AstralFadeHeader
            text="Explore the unknown"
            styling={"satellite-header"}
          />
          <AstralFadeText
            styling={"satellite-text"}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
        <img src={satellite} id="astral-image-right" alt="rocket launch" />
      </div>

      <div className="content-container">
        <div id="astral-text-right">
          <AstralFadeHeader text="Explore the unknown" />
          <AstralFadeText
            styling={"astronaut-text"}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
        <img src={astronaut} id="astral-image-left" alt="rocket launch" />
      </div>
    </div>
  );
});

export default Astral;
