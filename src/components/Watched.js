import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faMultiply } from "@fortawesome/free-solid-svg-icons";

export const Watched = () => {
  const { watched, removeWatched } = useContext(Context);
  let poster_path;

  return (
    <>
      <div className='watched-list'>
        <h1 className='watched-title'>İzlenenler</h1>
        <ul>
          {watched.map((item) => (
            <>
              <li className='watched-box'>
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
                  <button>
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                  </button>
                  <button onClick={() => removeWatched(item.id)}>
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
