import React, { forwardRef } from "react";

const Astral = forwardRef((props, ref) => {
  return (
    <div className="astral" ref={ref}>
      Astral!!!
    </div>
  );
});

export default Astral;
