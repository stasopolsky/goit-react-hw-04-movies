/* eslint-disable  */
import React, { Component } from "react";
import * as articleAPI from "../../services/articles-api";

class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const { id } = this.props.location.state;
    articleAPI.getMoviesReviews(id).then(({ data }) => {
      console.log(data);
      this.setState({ reviews: data.results });
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Reviews;
