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
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 5,
            },
            color: {
              value: "#fff",
            },
            opacity: {
              value: 0.4,
            },
            line_linked: {
              enable: "true",
              color: "#fff",
              opacity: 0.5,
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
}
