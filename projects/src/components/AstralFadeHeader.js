import React, { useRef, useEffect, useState } from "react";

import "./css/AstralFadeHeader.css";

export default function AstralFadeHeader(props) {
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
      className={`astral-fade-in-section-header ${
        isVisible ? "is-visible" : ""
      }`}
      ref={domRef}
    >
      <h1 id={props.styling}>{props.text}</h1>
    </div>
  );
}
