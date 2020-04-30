/* eslint-disable  */
import React, { Component } from "react";
import queryString from "query-string";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./MoviesPage.module.css";
import SearchBar from "../components/SearchBar/SearchBar";
import * as articleAPI from "../services/articles-api";

export default class Movies extends Component {
  state = {
    query: "",
    movies: [],
    // notFound: false,
  };

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search).query;
    if (parsed) {
      if (parsed !== undefined) {
        articleAPI.getTrendingMovies(parsed).then(({ data }) => {
          this.setState({ movies: data.results });
        });
      }
    }
  }

  onChange = (value) => {
    this.setState({ query: value });
  };

  onSearch = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
    articleAPI.getMoviesQuery(query).then(({ data }) => {
      this.setState({ movies: data.results });
    });
  };

  render() {
    const { movies, query } = this.state;
    return (
      <div className={css.moviesWrapper}>
        <SearchBar onSearch={this.onSearch} onChange={this.onChange} />
        <ul className={css.resultList}>
          {movies.map((movie) => (
            <li className={css.resultListItem} key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    id: movie.id,
                    from: "/movies",
                    search: `query=${query}`,
                  },
                }}
              >
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
