import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuotesAsync = createAsyncThunk(
  "quates/getQuotesAsync",
  async () => {
    const response = await axios.get(
      "https://www.breakingbadapi.com/api/quotes"
    );
    return await response.data;
  }
);

export const getQuotesByIdAsync = createAsyncThunk(
  "quates/getQuotesByIdAsync",
  async (quote_id) => {
    const response = await axios.get(
      "https://www.breakingbadapi.com/api/quotes/" + quote_id
    );
    return await response.data;
  }
);
