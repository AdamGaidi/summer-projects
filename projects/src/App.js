import React from "react";

//Stylesheet
import "./App.css";

//Projects
import LiteratureReview from "./projects/LiteratureReview";
import Website from "./projects/Website";
import Unity from "./projects/Unity";
import Astral from "./projects/Astral";

//Components
import ParticleComponent from "./components/ParticleComponent";

//Containers
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  return (
    <div>
      <div className="App">
        <HeaderContainer />
        <Website />
        <LiteratureReview />
        <Astral />
        <Unity />
      </div>
    </div>
  );
}

export default App;
