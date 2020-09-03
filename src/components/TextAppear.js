import React, { useState, useEffect, useRef } from "react";

//Stylesheet
import "./css/TextAppear.css";

//icon
import coding from "../assets/coding.svg";

export default function FadeTextComponent(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      id="flex-container"
      className={`appear-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <h1 id="web-title">{props.text}</h1>
      <img id="image" src={coding} alt={"illustrate coding"} />
    </div>
  );
}
