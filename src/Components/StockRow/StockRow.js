import React from "react";
import "./StockRow.css";
import { db } from "../../firebase";

const StockRow = (props) => {
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;
  const buyStock = () => {
    db.collection("userStocks").where("ticker", "==", props.name);
  };
  return (
    <div className="row" onClick={buyStock}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.shares && props.shares + " shares"}</p>
      </div>
      <div className="row__chart">
        {/* <img src={StockChart} height={16} /> */}
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default StockRow;
