import React from "react";
import Card from "react-bootstrap/Card";

//Stylesheet
import "./css/Website.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import FadeTextComponent from "../components/FadeTextComponent";
import TextAppear from "../components/TextAppear";
import { CardDeck, Button } from "react-bootstrap";

export default function Website(props) {
  const handleClick = (buttonID) => {
    props.navButtonClick(buttonID);
  };

  return (
    <div className="website">
      <FadeTextComponent
        text={
          "My summer internship got cancelled last minute due to the pandemic .."
        }
        left={true}
      />
      <FadeTextComponent
        text={".. I decided to make the most of an unfortunate situation"}
        left={false}
      />
      <TextAppear text={"The purpose of this Website"} />

      <div id="paragraph-container">
        <p id="website-paragraph">
          I made this website to serve as a summary of the projects I worked on
          during the summer of 2020. There are two main factors motivating the
          creation of a separate website: Keeping my CV tidy, and gaining
          additional experience in JS, React and CSS. The Computer Science
          programme at NTNU mainly base their courses on languages like C, C++,
          Python and Java. I recognize the usefulness of experience with
          frontend frameworks, which is why I tend to use them in hobby
          projects.
        </p>
        <p id="website-paragraph">
          This website is something I quickly hacked together and should not be
          regarded as a finished product. I have deliberately kept it as simple
          as possible as the goal was to create a functional website in a short
          amount of time. As such I have commited the cardinal sin of neither
          writing any tests nor ensuring compatibility with every browser on the
          market. Each project will have its' own section, featuring a unique
          design as I wanted to take the chance to play around with a couple of
          design ideas.
        </p>
      </div>

      <CardDeck>
        <Card style={{}} bg="dark" text="white" id="nav-card">
          <Card.Header>Literature Review</Card.Header>
          <Card.Body>
            <Card.Title>Complex Hypergraph Problems</Card.Title>
            <Card.Text>
              This project involved reading numerous scientific papers related
              to Hypergraphs, effectively searching for solutions in a massive
              problem space, and techniques for parallelizing such algorithms.
              Through this project I learned a lot about the research topic, and
              also acquired valuable experience in academic writing.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => handleClick("lit-rev")}>
              To project
            </Button>
          </Card.Footer>
        </Card>

        <Card style={{}} bg="dark" text="white" id="nav-card">
          <Card.Header>Astral</Card.Header>
          <Card.Body>
            <Card.Title>Hypergraph Visualization Tool</Card.Title>
            <Card.Text>
              Following my work with the Literature Review, and hypergraphs in
              general, I figured visualizing hypergraphs would be a fun and
              challenging project as visualizing data models is something I've
              rarely done - always using existing frameworks and tools. Most
              existing representations are based in 2 dimensions, and not very
              pretty - for this reason I decided I wanted to try to create a
              prototype of a 3D visualization tool.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => handleClick("astral")}>
              To project
            </Button>
          </Card.Footer>
        </Card>

        <Card style={{}} bg="dark" text="white" id="nav-card">
          <Card.Header>Unity 3D & RL</Card.Header>
          <Card.Body>
            <Card.Title>
              Tutorials in Reinforcement Learning and Unity 3D
            </Card.Title>
            <Card.Text>
              Enabling an AI-agent to perform tasks in a real-world 3D
              environment using Reinforcement Learning will be the topic of my
              Masters' Thesis. In order to focus on the main task; Reinforcement
              Learning, I decided to spend some time during the summer break to
              learn basic RL and acquaint myself with the Unity Game Engine.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => handleClick("unity")}>
              To project
            </Button>
          </Card.Footer>
        </Card>
      </CardDeck>

      <div id="credit">
        Icon made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
