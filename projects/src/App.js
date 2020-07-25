import React from "react";
import "./App.css";

//Plugins
import Particles from "react-particles-js";

//Projects

function App() {
  return (
    <div className="App">
      TEst
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 5,
            },
            color: {
              value: "#000",
            },
            line_linked: {
              enable: "true",
              color: "#000000",
              opacity: 0.1,
            },
          },
        }}
      />
    </div>
  );
}

export default App;
