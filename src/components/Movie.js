import React, { useEffect, useState } from "react";

export const Movie = () => {
  const [results, setResults] = useState([]);

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/{movie_id}?api_key=e2128b13ec124682a6faf0d1d5588b00&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
        console.log(data);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {
        // <section>
        //   <div className='movie-list'>
        //     <ul>
        //       {results.map((item, key) => (
        //         <>
        //           <div className='movie-box'>
        //             <li key={key.movie_id}>{item.title}</li>
        //             {
        //               <img
        //                 className='movie-image'
        //                 src={
        //                   " https://image.tmdb.org/t/p/w500/${item.poster_path}"
        //                 }
        //               ></img>
        //             }
        //           </div>
        //         </>
        //       ))}
        //     </ul>
        //   </div>
        // </section>
      }
    </>
  );
};
