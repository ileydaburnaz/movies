import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import "./style.css";

export const Besttv = ({ item }) => {
  const [results, setResults] = useState([]);
  let poster_path;
  const { addWatchlist, addWatched } = useContext(Context);

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=e2128b13ec124682a6faf0d1d5588b00&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <section>
        <div className='besttv-list'>
          <ul>
            {results.map((item, key) => (
              <>
                <li className='besttv-box' key={key}>
                  <span className='besttv-pp'>
                    {(poster_path = item.poster_path)}
                  </span>
                  <img
                    className='besttv-image'
                    src={" https://image.tmdb.org/t/p/w500/" + poster_path}
                  ></img>
                  <div className='besttv-info'>
                    <li>{item.name}</li>
                    <li>{item.first_air_date.substring(0, 4)}</li>
                    <li>{item.vote_average}</li>
                  </div>
                  <div className='besttv-button'>
                    <button
                      style={{ marginRight: "1px" }}
                      onClick={() => addWatchlist(item)}
                    >
                      İzlenecekler Listesine Ekle
                    </button>
                    <button
                      style={{ marginLeft: "1px" }}
                      onClick={() => addWatched(item)}
                    >
                      İzlenenler Listesine Ekle
                    </button>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
