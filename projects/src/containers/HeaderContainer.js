import React from "react";

//Stylesheet
import "./css/HeaderContainer.css";

//Components
import ParticleComponent from "../components/ParticleComponent";

export default function HeaderContainer() {
  return (
    <div className="header">
      <h1 className="bannerText">SUMMER of Code 2020</h1>
      <ParticleComponent />
    </div>
  );
}
