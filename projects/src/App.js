import React, { useRef } from "react";

//Stylesheet
import "./intro.css";
import "./html.css";

//Projects
import LiteratureReview from "./projects/LiteratureReview";
import Website from "./projects/Website";
import Unity from "./projects/Unity";
import Astral from "./projects/Astral";

//Containers
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  const litRevRef = useRef(null);
  const astralRef = useRef(null);
  const unityRef = useRef(null);

  const navButtonClick = (buttonID) => {
    scroll(buttonID);
  };

  const scroll = (buttonID) => {
    if (buttonID === "lit-rev") {
      litRevRef.current.scrollIntoView();
    } else if (buttonID === "astral") {
      astralRef.current.scrollIntoView();
    } else if (buttonID === "unity") {
      unityRef.current.scrollIntoView();
    }
  };

  return (
    <div className="App">
      <div className="intro">
        <HeaderContainer />
        <Website navButtonClick={navButtonClick} />
      </div>

      <LiteratureReview ref={litRevRef} />
      <Astral ref={astralRef} />
      <Unity ref={unityRef} />
    </div>
  );
}

export default App;
