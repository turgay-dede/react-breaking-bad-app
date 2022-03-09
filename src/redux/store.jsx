import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./charactersSlice";
import quotesReducer from "./quotesSlice";

export const store = configureStore({
  reducer: {
    character: characterReducer,
    quotes: quotesReducer,
  },
});
