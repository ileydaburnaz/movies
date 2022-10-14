import React, { useEffect, useState } from "react";
import { Cart } from "./Cart";
import "./style.css";

export const Popularmovie = () => {
  const [results, setResults] = useState([]);
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e2128b13ec124682a6faf0d1d5588b00&language=en-US&page=1"
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
        <div className='popularmovie-list'>
          <ul>
            {results.map((item, key) => (
              <>
                <li className='popularmovie-box' key={key}>
                  <Cart item={item}></Cart>
                </li>
              </>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
