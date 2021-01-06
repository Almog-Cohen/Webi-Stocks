import React from "react";
import TimeLine from "../TimeLine/TimeLine";
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
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2> Buying Power</h2>
          <h2> $4.11</h2>
        </div>
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p>Markets Close</p>
            <h1>Happy crissmess</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
