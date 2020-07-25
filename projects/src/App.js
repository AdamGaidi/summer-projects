import React from "react";

//Stylesheet
import "./App.css";

//Projects
import LiteratureReview from "./projects/LiteratureReview";
import Website from "./projects/Website";

//Components
import ParticleComponent from "./components/ParticleComponent";

function App() {
  return (
    <div>
      <div className="App">
        <ParticleComponent />
      </div>
      <LiteratureReview />
    </div>
  );
}

export default App;
