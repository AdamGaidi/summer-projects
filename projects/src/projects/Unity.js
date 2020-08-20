import React, { forwardRef } from "react";

import "./css/Unity.css";

const Unity = forwardRef((props, ref) => {
  return (
    <div className="unity" ref={ref}>
      <h1 id="title">Venture into the unknown</h1>
      <h1>You can only connect the dots looking backwards. - Steve Jobs</h1>
    </div>
  );
});

export default Unity;
