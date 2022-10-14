import { useDispatch } from "react-redux";
import { addWatched, addWatchlist } from "../redux/reducers/watchSlice";
import "./style.css";

export const Cart = ({ item }) => {
  // const hidewatched = watched.find((q) => q.id === item.id);
  // const hidewatchlist = watchlist.find((q) => q.id === item.id);
  let poster_path;
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <span className='cart-pp'>{(poster_path = item.poster_path)}</span>
        <div>
          <img
            className='cart-image'
            src={" https://image.tmdb.org/t/p/w500/" + poster_path}
          ></img>
        </div>
        {/* <div className='cart-info'>
          <li>
            {item.title}
            {item.name}
          </li>
          <li>{item.vote_average}</li>
        </div> */}
        <div className='cart-button'>
          <button
            style={{ marginRight: "1px" }}
            onClick={() => dispatch(addWatchlist(item))}
            // disabled={hidewatchlist}
          >
            İzlenecekler Listesine Ekle
          </button>
          <button
            style={{ marginLeft: "1px" }}
            onClick={() => dispatch(addWatched(item))}
            // disabled={hidewatched}
          >
            İzlenen Listesine Ekle
          </button>
        </div>
      </div>
    </>
  );
};
