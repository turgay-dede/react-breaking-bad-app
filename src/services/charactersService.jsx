import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 12;
export const getCharactersAsync = createAsyncThunk(
  "character/getCharactersAsync",
  async (page) => {
    const response = await axios.get(
      `https://www.breakingbadapi.com/api/characters?limit=${char_limit}&offset=${
        page * char_limit
      }`
    );
    return response.data;
  }
);
