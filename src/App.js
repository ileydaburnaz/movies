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
import { Tv } from "./components/Tv";
import { Movie } from "./components/Movie";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <Header />
          <Routes>
            {<Route path='/watched' element={<Watched />} />}
            {<Route path='/watchlist' element={<Watchlist />} />}
            {<Route path='/bestmovie' element={<Bestmovie />} />}
            {<Route path='/besttv' element={<Besttv />} />}
            {<Route path='/tv' element={<Tv />} />}
            {<Route path='/movie' element={<Movie />} />}
          </Routes>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
