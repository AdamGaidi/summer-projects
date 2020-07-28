import React, { useRef, useState, useEffect } from "react";

//Stylesheet
import "./App.css";

//Projects
import LiteratureReview from "./projects/LiteratureReview";
import Website from "./projects/Website";
import Unity from "./projects/Unity";
import Astral from "./projects/Astral";

//Containers
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  const [navButton, setNavButton] = useState("");
  const navigateRef = useRef(null);

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <div>
      <div className="App">
        <HeaderContainer />
        <Website scroll={scroll} reference={navigateRef} />
      </div>

      <LiteratureReview ref={navigateRef} />
      <Astral />
      <Unity />
    </div>
  );
}

export default App;
