// Curious about what I'm doing here? Check out https://stackoverflow.com/questions/49786505/what-is-correct-lifecycle-method-in-react-16-3-to-update-canvas-from-props/49803151#49803151
import React from "react";

export default class PureCanvas extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <canvas
        width="300"
        height="300"
        ref={(node) =>
          node ? this.props.contextRef(node.getContext("2d")) : null
        }
      />
    );
  }
}
