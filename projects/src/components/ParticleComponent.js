import React from "react";
import Particles from "react-particles-js";

export default function ParticleComponent(
  lineOppacity,
  particleOppacity,
  lineColor,
  particleColor,
  particleCount,
  enableLines
) {
  return (
    <div
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: " 100%",
      }}
    >
      <Particles
        params={{
          particles: {
            number: {
              value: particleCount,
            },
            size: {
              value: 5,
            },
            color: {
              value: particleColor,
            },
            opacity: {
              value: particleOppacity,
            },
            line_linked: {
              enable: enableLines,
              color: lineColor,
              opacity: lineOppacity,
            },
          },
        }}
      />
    </div>
  );
}
