import React from "react";
import LineGraph from "./LineGraph";
import "./Newsfeed.css";

const Newsfeed = () => {
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="news__portflio">
            <h1>$165,684</h1>
            <p>+$44.63 (+0.04%) Today</p>
          </div>

          <div className="newsfeed__char">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
