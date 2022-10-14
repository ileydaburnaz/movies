import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeWatchlist, watchlistEye } from "../redux/reducers/watchSlice";

export const Watchlist = ({ item }) => {
  let poster_path;
  const watchlist = useSelector((state) => state.watchReducer.watchlist);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, []);
  return (
    <>
      <div className='watchlist-list'>
        <h1 className='watchlist-title'>İzlenecekler</h1>
        <ul>
          {watchlist.map((item, key) => (
            <>
              <li className='watchlist-box' key={key}>
                <div>
                  <span className='watchlist-pp'>
                    {(poster_path = item.poster_path)}
                  </span>
                  <img
                    className='watchlist-image'
                    src={" https://image.tmdb.org/t/p/w500/" + poster_path}
                  ></img>
                  <div className='watchlist-button'>
                    <button onClick={() => dispatch(watchlistEye(item))}>
                      <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </button>
                    <button onClick={() => dispatch(removeWatchlist(item.id))}>
                      <FontAwesomeIcon icon={faMultiply}></FontAwesomeIcon>
                    </button>
                  </div>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};
