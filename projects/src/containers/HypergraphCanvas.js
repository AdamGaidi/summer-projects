// Following tutorials https://philna.sh/blog/2018/09/27/techniques-for-animating-on-the-canvas-in-react/
// and http://www.petecorey.com/blog/2019/08/19/animating-a-canvas-with-react-hooks/
import React, { useRef, useEffect } from "react";

// Components
import Animation from "../components/HypergraphVisual/Animation";

const getPixelRatio = (context) => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  return (window.devicePixelRatio || 1) / backingStore;
};

export default function HypergraphCanvas() {
  return <Animation />;
}

/*
export default function HypergraphCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas = canvasRef.current;
    let context = canvas.getContext("2d");

    let ratio = getPixelRatio(context);
    let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    let requestId,
      i = 0;
    const render = () => {
      context.beginPath();
      context.arc(
        canvas.width / 2,
        canvas.height / 2,
        (canvas.width / 2) * Math.abs(Math.cos(i)),
        0,
        2 * Math.PI
      );
      context.fill();
      i += 0.05;
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return <canvas ref={canvasRef} style={{ width: "100px", height: "100px" }} />;
}
*/
