import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home";
// import AboutPage from '../pages/About';
// import MoviesPage from "../pages/Movies";
import NotFoundPage from "../pages/NotFound";
// import MoviePage from "../pages/MoviePage";
import Nav from "./Nav/Nav";
import Spinner from "./Spinner/Spinner";

const LazyMovies = lazy(() =>
  import("../pages/Movies" /* webpackChunkName: "movies-search" */)
);

const LazyMoviePage = lazy(() =>
  import("../pages/MoviePage" /* webpackChunkName: "movie-page" */)
);

const App = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" component={LazyMoviePage} />
          <Route path="/movies" component={LazyMovies} />

          {/* <Route path="/about" component={AboutPage} /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
