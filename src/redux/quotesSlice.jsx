import { createSlice } from "@reduxjs/toolkit";
import { getQuotesAsync, getQuotesByIdAsync } from "../services/quotesService";

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
    status: "idle",
    error: "",
    quote: {},
  },
  reducers: {},
  extraReducers: {
    // getQuotesAsync
    [getQuotesAsync.pending]: (state, action) => {
      state.status = "loading";
    },
    [getQuotesAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [getQuotesAsync.rejected]: (state, action) => {
      state.status = "failed";
    },
    // getQuotesByIdAsync  
    [getQuotesByIdAsync.fulfilled]: (state, action) => {
      state.quote = action.payload;
      state.status = "succeeded";
    }
  },
});

export const quotesSelector = (state) => state.quotes.items;
export const statusSelector = (state) => state.quotes.status;
export const errorSelector = (state) => state.quotes.error;
export default quotesSlice.reducer;
