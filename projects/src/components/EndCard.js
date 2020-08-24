import React from "react";

import "./css/EndCard.css";

export default function EndCard() {
  return (
    <div className="end-container">
      <div className="end-content">
        Thank you for scrolling this far. I hope you enjoyed the website, it was
        a fun quick project to work on whenever I had some spare time. You can
        find the github repo {""}
        <a href="https://github.com/AdamGaidi/summer-projects" title="repo">
          HERE.
        </a>
        {""} If I have any time to spare I will write a README with more
        in-depth information on topics related to this website.
      </div>
    </div>
  );
}
