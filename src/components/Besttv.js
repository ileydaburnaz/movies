import React, { useEffect, useState } from "react";
import { Cart } from "./Cart";
import "./style.css";

export const Besttv = () => {
  const [results, setResults] = useState([]);

  const getTv = () => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=e2128b13ec124682a6faf0d1d5588b00&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
      });
  };
  useEffect(() => {
    getTv();
  }, []);
  return (
    <>
      <section>
        <div className='besttv-list'>
          <ul>
            {results.map((item, key) => (
              <>
                <li className='besttv-box' key={key}>
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
