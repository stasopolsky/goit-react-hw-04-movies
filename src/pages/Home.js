/* eslint-disable  */
import React, { Component } from "react";
// import { Route } from 'react-router-dom';

import ArticleList from "../components/ArticleList";
import * as articleAPI from "../services/articles-api";

export default class Home extends Component {
  state = { movies: [] };

  componentDidMount() {
    // const category = getCategoryFromLocation(this.props.location);
    articleAPI
      .getTrendingMovies()
      .then(({ data }) => this.setState({ movies: data.results }));
  }

  render() {
    const { movies } = this.state;
    // console.log(movies);

    return (
      <div>
        <h1>Trending Movies page</h1>

        <ArticleList data={movies} />
      </div>
    );
  }
}
