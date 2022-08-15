import React, { useEffect } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { setTickers } from "./features/ticker/tickerSlice";

import Tickers from "./components/Tickers/Tickers";

const socket = io("http://localhost:4000/");

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected");
    });
    socket.emit("start");
    console.log("socket emit start");

    socket.on("ticker", function (quotes) {
      dispatch(setTickers(quotes));
    });
  }, []);

  return (
    <>
      <Tickers />
    </>
  );
}

export default App;
