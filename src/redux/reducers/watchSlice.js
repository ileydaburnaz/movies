import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const watchSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {
    addWatchlist: (state, action) => {
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    },
    addWatched: (state, action) => {
      return {
        ...state,
        watched: [...state.watched, action.payload],
      };
    },
    removeWatchlist: (state, action) => {
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (state) => state.id !== action.payload
        ),
      };
    },
    removeWatched: (state, action) => {
      return {
        ...state,
        watched: state.watched.filter((state) => state.id !== action.payload),
      };
    },
    watchlistEye: (state, action) => {
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (state) => state.id !== action.payload.id
        ),
        watched: [...state.watched, action.payload],
      };
    },
    watchedEyeSlash: (state, action) => {
      return {
        ...state,
        watched: state.watched.filter(
          (state) => state.id !== action.payload.id
        ),
        watchlist: [...state.watchlist, action.payload],
      };
    },
  },
});

export const {
  addWatchlist,
  addWatched,
  removeWatchlist,
  removeWatched,
  watchlistEye,
  watchedEyeSlash,
} = watchSlice.actions;
export default watchSlice.reducer;
