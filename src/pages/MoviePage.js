import React, { Component, lazy, Suspense } from "react";
/* eslint-disable  */
// import PropTypes from "prop-types";
import { Route, NavLink, Switch } from "react-router-dom";
import * as articleAPI from "../services/articles-api";
// import Cast from "../components/Cast/Cast";
// import Reviews from "../components/Reviews/Reviews";
import css from "./movieDetailPage.module.css";

const AsyncCast = lazy(() =>
  import("../components/Cast/Cast" /* webpackChunkName: "cast" */)
);

const AsyncReviews = lazy(() =>
  import("../components/Reviews/Reviews" /* webpackChunkName: "reviews" */)
);

class MoviePage extends Component {
  // static propTypes = {
  //   history: PropTypes.shape({
  //     goBack: PropTypes.func.isRequired,
  //     replace: PropTypes.func.isRequired,
  //   }).isRequired,
  //   match: PropTypes.shape({
  //     params: PropTypes.shape({
  //       id: PropTypes.string,
  //     }),
  //   }).isRequired,
  // };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    movie: {},
    prevLocation: "",
  };

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    articleAPI.fetchMovieWithId(this.props.match.params.id).then(({ data }) => {
      this.setState({ movie: data });
    });
    // this.setState({
    //   pathname: this.props.location.state.from,
    //   search: this.props.location.state.search,
    // });
  }

  handleGoback = () => {
    const { prevLocation } = this.state;
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    if (prevLocation) {
      // eslint-disable-next-line react/prop-types
      history.push(prevLocation);
    } else {
      // eslint-disable-next-line react/prop-types
      history.push("/");
    }
  };

  render() {
    const { movie, movie: { genres = [] } = [] } = this.state;
    return (
      <>
        <div className={css.buttonWrapper}>
          <button
            className={css.goBackButton}
            type="button"
            onClick={this.handleGoback}
          >
            Go back
          </button>
        </div>

        <div className={css.movieWrapper}>
          <div className={css.posterWrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie poster"
            />
          </div>

          <div className={css.movieInfoWrapper}>
            <h2 className={css.movieTitle}>{movie.title}</h2>
            <p className={css.movieScore}>
              User score: {movie.vote_average * 10}%
            </p>
            <p className={css.movieOverview}>Overview:</p>
            <p className={css.movieOverviewText}>{movie.overview}</p>
            <p className={css.movieGenres}>Genres:</p>
            <p>
              {genres.map((genre) => (
                <span className={css.movieGenresList} key={genre.id}>
                  {genre.name}{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div>
          <p className={css.additionalInfo}>Additional information:</p>
          <ul className={css.additionalInfoList}>
            <li>
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}/cast`,
                  state: { id: movie.id },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}/reviews`,
                  state: { id: movie.id },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path={`/movies/${movie.id}/cast`} component={AsyncCast} />
              <Route
                path={`/movies/${movie.id}/reviews`}
                component={AsyncReviews}
              />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

export default MoviePage;
