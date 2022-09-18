import React, { useContext } from "react";
import { Context } from "../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faMultiply } from "@fortawesome/free-solid-svg-icons";
export const Watchlist = () => {
  const { watchlist, removeWatchlist } = useContext(Context);
  let poster_path;
  return (
    <>
      <div className='watchlist-list'>
        <h1 className='watchlist-title'>İzlenecekler</h1>
        <ul>
          {watchlist.map((item) => (
            <>
              <li className='watchlist-box'>
                <div>
                  <span className='watchlist-pp'>
                    {(poster_path = item.poster_path)}
                  </span>
                  <img
                    className='watchlist-image'
                    src={" https://image.tmdb.org/t/p/w500/" + poster_path}
                  ></img>
                  <div className='watchlist-button'>
                    <button>
                      <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </button>
                    <button onClick={() => removeWatchlist(item.id)}>
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
