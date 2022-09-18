import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

export const Context = createContext();
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addWatchlist = (item) => {
    dispatch({ type: "ADD_WATCHLIST", payload: item });
  };

  const addWatched = (item) => {
    dispatch({ type: "ADD_WATCHED", payload: item });
  };

  const removeWatchlist = (id) => {
    dispatch({ type: "REMOVE_WATCHLİST", payload: id });
  };
  const removeWatched = (id) => {
    dispatch({ type: "REMOVE_WATCHED", payload: id });
  };
  return (
    <Context.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addWatchlist,
        addWatched,
        removeWatchlist,
        removeWatched,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
