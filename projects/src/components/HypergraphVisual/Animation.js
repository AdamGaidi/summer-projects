import React from "react";

//Components
import Canvas from "./Canvas";

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: 0,
      color: "#000000",
    };

    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState() {
    this.setState((prevState) => ({
      angle: prevState.angle + 1,
    }));

    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return <Canvas angle={this.state.angle} color={this.state.color} />;
  }
}
