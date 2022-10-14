import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { removeWatched, watchedEyeSlash } from "../redux/reducers/watchSlice";
import { useDispatch, useSelector } from "react-redux";

export const Watched = () => {
  let poster_path;
  const watched = useSelector((state) => state.watchReducer.watched);

  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, []);

  return (
    <>
      <div className='watched-list'>
        <h1 className='watched-title'>İzlenenler</h1>
        <ul>
          {watched.map((item, key) => (
            <>
              <li className='watched-box' key={key}>
                <div>
                  <span className='watched-pp'>
                    {(poster_path = item.poster_path)}
                  </span>
                  <img
                    className='watched-image'
                    src={" https://image.tmdb.org/t/p/w500/" + poster_path}
                  ></img>
                </div>
                <div className='watched-button'>
                  <button onClick={() => dispatch(watchedEyeSlash(item))}>
                    <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
                  </button>
                  <button onClick={() => dispatch(removeWatched(item.id))}>
                    <FontAwesomeIcon icon={faMultiply}></FontAwesomeIcon>
                  </button>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};
