import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Stats.css";
import StockRow from "../StockRow/StockRow";
import { db } from "../../firebase";

const testData = [];

const Stats = () => {
  const STOCK_URL = "https://finnhub.io/api/v1/quote";
  const [stockData, setStockData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  // Api for get JSON with info about our stocks
  const getStockData = (stock) => {
    return axios
      .get(`${STOCK_URL}?symbol=${stock}&token=${process.env.REACT_APP_TOKEN}`)
      .catch((err) => console.log(err));
  };

  // Get Info about user stocks list
  const getUserStocks = () => {
    db.collection("userStocks").onSnapshot((snapshot) => {
      let tempStockData = [];
      let promises = [];
      snapshot.docs.map((doc) => {
        promises.push(
          getStockData(doc.data().ticker).then((res) => {
            tempStockData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            });
          })
        );
      });
      Promise.all(promises).then(() => {
        setMyStocks(tempStockData);
      });
    });
  };

  useEffect(() => {
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "FB",
      "BABA",
      "UBER",
      "DIS",
      "SBUX",
    ];
    getUserStocks();
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStockData(stock).then((res) => {
          testData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setStockData(testData);
    });
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {myStocks.map((stock) => (
              <StockRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                shares={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        {/* current stocks */}
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
      </div>
    </div>
  );
};

export default Stats;
