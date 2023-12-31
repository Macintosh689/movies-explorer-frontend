import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMovies: [],
  search: "",
  error: false,
  short: false,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    setAllMovies: (state, action) => {
      state.allMovies = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setShort: (state, action) => {
      state.short = action.payload;
    },

    clearMovie: (state, action) => {
      state.allMovies = [];
      state.search = "";
      state.error = false;
      state.short = false;
    },
  },
});

export default moviesSlice.reducer;

export const { setAllMovies, setSearch, setError, setShort, clearMovie } =
  moviesSlice.actions;
