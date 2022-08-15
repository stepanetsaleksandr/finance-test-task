import React from "react";
import classes from "./Tickers.module.css";
import { useSelector } from "react-redux";
import TopMenu from "../TopMenu/TopMenu";
import TickerLine from "../TickerLine/TickerLine";

const Tickers = () => {
  const tickers = useSelector((state) => state.tickers.tickersOn);
  const allTickers = useSelector((state) => state.tickers.allTickers);
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.menu}>
            <TopMenu />
          </div>
          <div className={classes.header}>
            <div className={classes.header_item}>Ticker</div>
            <div className={classes.header_item}>Change</div>
            <div className={classes.header_item}>Change Percent</div>
            <div className={classes.header_item}>Dividend</div>
            <div className={classes.header_item}>Yield</div>
            <div className={classes.header_item}>Price</div>
          </div>
          {tickers.map((ticker) => (
            <TickerLine key={ticker} ticker={ticker} tickers={allTickers} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickers;
