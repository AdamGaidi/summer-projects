import React, { forwardRef } from "react";

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
             The vision of my next project presented itself as a natural progression on my journey through the summer months. Reading 
             about these mathematical constructs from sources heavily engrained in academia, which had a pragmatic approach to visualizing them,
              gave me the desire to visualize them in a different, more exciting, way."
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
          <AstralFadeText
            styling={"takeoff-text"}
            text="With a new goal in mind, I set off to do some reasearch. Various tools and technologies are available to us as Software Engineers,
             choosing the right ones is an important decision that can have a profound impact on a project. 
             Following my survey I decided upon Javascript as my chosen platform on my journey to create a working MVP of the hypergraph visualization tool, Astral."
          />
        </div>
        <img src={takeoff} id="astral-image-left" alt="rocket launch" />
      </div>

      <div className="content-container" id="satellite-background">
        <div id="astral-text-left">
          <AstralFadeHeader
            text="The sun's rays do not burn until brought to a focus"
            styling={"satellite-header"}
          />
          <AstralFadeText
            styling={"satellite-text"}
            text="'I can just do it real quick - It can't be that bad!' are words often accompanied by underestimating a projects' workload. 
            Project scale, planning, structure and all other 'non-programming' tasks connected with the management of a project are essential to ensure success.
            I had initally wanted to create a full suite with a react frontend visualization framework which supported several Hypergraph algorithms, 
            visualizing the results of any algorihtm the user decided to run.
             The algorithms were to be run on a Node.js server calling the C++ Hygra framework, and serving the results through a GraphQL endpoint. All made available on a public website."
          />
          <AstralFadeText
            styling={"satellite-text"}
            text="Fortunately, wiser through experience, I decided to focus only on visualizing very simple and sparse hypergraphs represented as JSON objects.
            No backend, no GraphQL, just JS and JSON-objects."
          />
        </div>
        <img src={satellite} id="astral-image-right" alt="rocket launch" />
      </div>

      <div className="content-container">
        <div id="astral-text-right">
          <AstralFadeHeader text="The forthcoming journey" />
          <AstralFadeText
            styling={"astronaut-text"}
            text="As the summer is coming to a close, I have gotten to work a bit on various approaches to this tool. 
          I looked into both 3D alternatives like Three.js, and 2D alternatives like Canvas. At present, the project has not yet reached a state where I'm happy to call it 
          an MVP, as it still requires a bit more work. The next semester is quickly approaching, in fact it's already here. I may continue work on it in the future, 
          however for the time being I'm happy to have had the chance to explore new technologies, and learn a lot in the process of doing so."
          />
        </div>
        <img src={astronaut} id="astral-image-left" alt="rocket launch" />
      </div>

      <div id="astral-credit">
        Images taken from{" "}
        <a href="https://www.unsplash.com" title="unsplash">
          Unsplash
        </a>
        {""} a website offering freely usable images and pictures.
      </div>
    </div>
  );
});

export default Astral;
