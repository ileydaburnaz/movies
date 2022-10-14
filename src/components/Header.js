import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <header>
        <div className='container'>
          <div className='hdr-ust'>
            <div className='brand'>
              <a href='/'>DiziFilm</a>
            </div>
            <ul>
              <li>
                <Link to='/besttv'>En İyi Diziler</Link>
              </li>
              <li>
                <Link to='/bestmovie'>En İyi Filmler</Link>
              </li>
              <li>
                <Link to='/populartv'>En Çok İzlenen Diziler</Link>
              </li>
              <li>
                <Link to='/popularmovie'>En Çok İzlenen Filmler</Link>
              </li>
              <li>
                <Link to='/'>Giriş Yap</Link>
              </li>
              <li>
                <Link to='/'>Üye Ol</Link>
              </li>
            </ul>
          </div>
          <div className='hdr-alt'>
            <ul>
              <li>
                <Link to='/watchlist'>İzlenecekler</Link>
              </li>
              <li>
                <Link to='/watched'>İzlenenler</Link>
              </li>
            </ul>
            <div className='search'>
              <input text='text' placeholder='Film ismi girin'></input>
              <div className='search-icon'>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
