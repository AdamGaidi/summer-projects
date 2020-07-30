import React from "react";

//Components
import Canvas from "./Canvas";

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: 0,
      color: "#000000",
      targetIndex: 0,
      targetColors: [
        "#04354D",
        "#1B3D4D",
        "#086B99",
        "#0A8FCC",
        "#4AA9D5",
        "#0A8FCC",
        "#086B99",
        "#1B3D4D",
        "#04354D",
      ],
      timesteps: 0,
      delay: 150,
    };

    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  // Gradual transition from start to target color
  // Return object with 2 fields;
  // targetReached, if true we reached the target and newColor = target
  // newColor: String hex with the new color
  colorTransition(start, target, increment) {
    var result = {
      targetReached: false,
      newColor: "#ffffff",
    };

    //ASCII to HEX
    var hexStart = parseInt(start.substring(1, start.length), 16);
    var hexTarget = parseInt(target.substring(1, target.length), 16);

    if (hexStart <= hexTarget) {
      // Increment towards target
      hexStart += increment;
      if (hexStart < hexTarget) {
        // Did not pass our target
        result = {
          targetReached: false,
          newColor: "#" + hexStart.toString(16),
        };
      } else {
        // We reached our target
        result = {
          targetReached: true,
          newColor: "#" + hexTarget.toString(16),
        };
      }
    } else {
      // Decrement towards target
      hexStart -= increment;
      if (hexStart > hexTarget) {
        // Did not pass our target
        result = {
          targetReached: false,
          newColor: "#" + hexStart.toString(16),
        };
      } else {
        // We reached our target
        result = {
          targetReached: true,
          newColor: "#" + hexTarget.toString(16),
        };
      }
    }

    return result;
  }

  updateAnimationState() {
    let updateColor = false;
    if (this.state.counter === this.state.duration) {
      updateColor = true;
    }

    let increment = 1;
    let transition = this.colorTransition(
      this.state.color,
      this.state.targetColors[this.state.targetIndex],
      increment
    );

    let targetReached = transition.targetReached;
    let newColor;
    if (updateColor) {
      newColor = transition.newColor;
    } else {
      newColor = this.state.color;
    }

    if (targetReached) {
      this.setState((prevState) => ({
        angle: prevState.angle + 1,
        color: newColor,
        targetIndex: (prevState.targetIndex + 1) % 9,
      }));
    } else {
      this.setState((prevState) => ({
        angle: prevState.angle + 1,
        color: newColor,
      }));
    }
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return <Canvas angle={this.state.angle} color={this.state.color} />;
  }
}
