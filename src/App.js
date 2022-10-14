import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { Watched } from "./components/Watched";
import { Watchlist } from "./components/Watchlist";
import { Bestmovie } from "./components/Bestmovie";
import { Besttv } from "./components/Besttv";
import { Populartv } from "./components/Populartv";
import { Popularmovie } from "./components/Popularmovie";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {<Route path='/watched' element={<Watched />} />}
          {<Route path='/watchlist' element={<Watchlist />} />}
          {<Route path='/bestmovie' element={<Bestmovie />} />}
          {<Route path='/besttv' element={<Besttv />} />}
          {<Route path='/populartv' element={<Populartv />} />}
          {<Route path='/popularmovie' element={<Popularmovie />} />}
        </Routes>
      </Router>
    </>
  );
}

export default App;
