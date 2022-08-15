import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickersOn: ["appl", "google", "fb", "tsla"],
  tickersOff: ["msft", "amzn"],
  appl: [{ price: "0" }],
  applBefore: [{ price: "0" }],
  google: [{ price: "0" }],
  googleBefore: [{ price: "0" }],
  msft: [{ price: "0" }],
  msftBefore: [{ price: "0" }],
  amzn: [{ price: "0" }],
  amznBefore: [{ price: "0" }],
  fb: [{ price: "0" }],
  fbBefore: [{ price: "0" }],
  tsla: [{ price: "0" }],
  tslaBefore: [{ price: "0" }],
};

export const tickerSlice = createSlice({
  name: "tickers",
  initialState,
  reducers: {
    setTickers: (state, action) => {
      state.applBefore = state.appl;
      state.appl = action.payload.filter((item) => item.ticker === "AAPL");
      state.googleBefore = state.google;
      state.google = action.payload.filter((item) => item.ticker === "GOOGL");
      state.msftBefore = state.msft;
      state.msft = action.payload.filter((item) => item.ticker === "MSFT");
      state.amznBefore = state.amzn;
      state.amzn = action.payload.filter((item) => item.ticker === "AMZN");
      state.fbBefore = state.fb;
      state.fb = action.payload.filter((item) => item.ticker === "FB");
      state.tslaBefore = state.tsla;
      state.tsla = action.payload.filter((item) => item.ticker === "TSLA");
    },
    deleteTickersOn: (state, action) => {
      state.tickersOff.push(action.payload);
      state.tickersOn = state.tickersOn.filter(
        (item) => item !== action.payload
      );
    },
    deleteTickersOff: (state, action) => {
      state.tickersOn.push(action.payload);
      state.tickersOff = state.tickersOff.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { setTickers, deleteTickersOn, deleteTickersOff } =
  tickerSlice.actions;

export default tickerSlice.reducer;
