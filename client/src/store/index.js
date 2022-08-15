import { configureStore } from "@reduxjs/toolkit";
import tickerSlice from "../features/ticker/tickerSlice";

export const store = configureStore({
  reducer: {
    tickers: tickerSlice,
  },
});
