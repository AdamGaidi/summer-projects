import React from "react";
import Particles from "react-particles-js";

export default function ParticleComponent() {
  return (
    <div>
      <Particles
        height={"100vh"}
        params={{
          particles: {
            number: {
              value: 80,
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
