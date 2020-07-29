import React, { useRef, useState, useEffect } from "react";

//Stylesheet
import "./App.css";
import "./html.css";

//Projects
import LiteratureReview from "./projects/LiteratureReview";
import Website from "./projects/Website";
import Unity from "./projects/Unity";
import Astral from "./projects/Astral";

//Containers
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  const [navButton, setNavButton] = useState("");
  const litRevRef = useRef(null);
  const astralRef = useRef(null);
  const unityRef = useRef(null);

  const navButtonClick = (buttonID) => {
    scroll();
  };

  const scroll = () => {
    litRevRef.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <div>
      <div className="App">
        <HeaderContainer />
        <Website navButtonClick={navButtonClick} />
      </div>

      <LiteratureReview ref={litRevRef} />
      <Astral />
      <Unity />
    </div>
  );
}

export default App;
