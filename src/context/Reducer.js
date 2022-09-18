export default (state, action) => {
  switch (action.type) {
    case "ADD_WATCHLIST":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case "ADD_WATCHED":
      return {
        ...state,
        watched: [...state.watched, action.payload],
      };
    case "REMOVE_WATCHLİST":
      return {
        ...state,
        watchlist: state.watchlist.filter((item) => item.id !== action.payload),
      };
    case "REMOVE_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
