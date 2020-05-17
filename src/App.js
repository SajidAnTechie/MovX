import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = lazy(() => import("./Components/Home"));
const NowPlaying = lazy(() => import("./Components/AllNowPlayingMovies"));
const TopRated = lazy(() => import("./Components/AlltopRatedMovies"));
const Upcoming = lazy(() => import("./Components/AllUpcomingMovies"));
const SinglePageMovie = lazy(() => import("./Components/singleMoviePage"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/NowPlaying_Movies" component={NowPlaying} />
          <Route exact path="/ToPRated_Movies" component={TopRated} />
          <Route exact path="/UpComing_Movies" component={Upcoming} />
          <Route exact path="/view/movie/:id" component={SinglePageMovie} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
