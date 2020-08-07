import React, { forwardRef, useRef, useEffect } from "react";
import ThreeScene from "../containers/ThreeScene";

// Stylesheet
import "./css/Astral.css";

const Astral = forwardRef((props, ref) => {
  return (
    <div className="astral" ref={ref}>
      <div className="astral-title">Astral</div>
      <ThreeScene />
      <div className="astral-content"></div>
    </div>
  );
});

export default Astral;
