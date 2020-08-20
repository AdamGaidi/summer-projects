import React, { useRef, useEffect, useState } from "react";

import "./css/AstralFadeText.css";

export default function AstralFadeText(props) {
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
      className={`astral-fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <p id="astral-text" id={props.styling}>
        {props.text}
      </p>
    </div>
  );
}
