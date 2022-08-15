import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import { deleteTickersOn } from "../../features/ticker/tickerSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./TickerLine.module.css";

const TickerLine = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tickers[props.ticker]);

  const dataBefore = useSelector(
    (state) => state.tickers[props.ticker + "Before"]
  );
  const tickerFontColor = dataBefore[0].price > data[0].price ? "red" : "green";
  const tickerColor =
    dataBefore[0].price > data[0].price
      ? "linear-gradient(90deg, rgba(255,255,255,1) 25%, rgba(245,220,220,1) 50%)"
      : "linear-gradient(90deg, rgba(255,255,255,1) 25%, rgba(220,245,220,1) 50%)";

  const deleteTicker = (ticker) => {
    dispatch(deleteTickersOn(ticker));
  };

  return (
    <>
      <div>
        <div>
          {data.map((item) => (
            <div key={item} onClick={props.click}>
              <div
                className={classes.ticker}
                style={{ color: tickerFontColor, background: tickerColor }}
              >
                <div className={classes.ticker_item_ticker}>{item.ticker}</div>
                <div className={classes.ticker_item}>{item.change}</div>
                <div className={classes.ticker_item}>{item.change_percent}</div>
                <div className={classes.ticker_item}>{item.dividend}</div>
                <div className={classes.ticker_item}>{item.yield}</div>
                <div>{item.price}</div>
                <div onClick={() => deleteTicker(props.ticker)}>
                  <DoDisturbOnIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TickerLine;
