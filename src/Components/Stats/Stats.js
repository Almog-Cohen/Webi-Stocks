import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Stats.css";
import StockRow from "../StockRow/StockRow";

const Stats = () => {
  // const TOKEN = "bvqau6n48v6s3bgpkqag";
  const STOCK_URL = "https://finnhub.io/api/v1/quote";
  const [stockData, setStockData] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const getStockData = (stock) => {
    return axios
      .get(`${STOCK_URL}?symbol=${stock}&token=${process.env.REACT_APP_TOKEN}`)
      .catch((err) => console.log(err));
  };

  setInterval(() => {
    setSeconds((seconds) => seconds + 1);
  }, 5000);

  useEffect(() => {
    let tempStockData = [];
    console.log("shit happns");
    // const interval = setInterval(() => {
    //   setTimers((timer) => timer + 1);
    // }, 1000);

    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER"];
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStockData(stock).then((res) => {
          tempStockData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setStockData(tempStockData);
      console.log(tempStockData);
    });

    // return () => clearTimeout(interval);
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock) => (
              <StockRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        {/* current stocks */}
        <div className="stats__content">
          <div className="stats__rows">{/* stocks we buy  */}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
