import { createSlice } from "@reduxjs/toolkit";
import { getCharactersAsync } from "../services/charactersService";

export const charactersSlice = createSlice({
  name: "character",
  initialState: {
    characters: [],
    status: "idle",
    error: "",
    page: 0,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [getCharactersAsync.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCharactersAsync.fulfilled]: (state, action) => {
      state.characters = [...state.characters, ...action.payload]; // state de bulunan verileri koru, üzerine yeni gelenleri ekle
      state.status = "succeeded";
      state.page += 1;

      if (action.payload.length < 12) {
        state.hasNextPage = false;
      }
    },
    [getCharactersAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    },
  },
});

export default charactersSlice.reducer;
