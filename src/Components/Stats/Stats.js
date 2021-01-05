import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__stocks"></div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        {/* current stocks */}
        <div className="stats__content">
          <div className="stats__stocks">{/* stocks we buy  */}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
