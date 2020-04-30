/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
import React, { Component } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import * as articleAPI from "../../services/articles-api";
import css from "./Cast.module.css";

class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = { cast: [] };

  componentDidMount() {
    const { id } = this.props.location.state;
    articleAPI.getMoviesCredits(id).then(({ data }) => {
      //   console.log(data);
      this.setState({ cast: data.cast });
    });
  }

  render() {
    const { cast } = this.state;
    return (
      <div className={css.castWrapper}>
        <ul className={css.castList}>
          {cast.map((el) => (
            <li className={css.castListItem} key={el.cast_id}>
              <p>Character:</p>
              <p>{el.character}</p>
              <img
                className={css.actorPhoto}
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : "https://lh3.googleusercontent.com/proxy/dU7LkRtsQVaZ2PzcPnzMO63OYQ8wr9hoRQUBUyUHJVOxl_3judSWdChNR-Z3fycnyiqhU1ouixIlTl_VloK7viArt1IG6Yk"
                }
                alt={el.name}
              />
              <p>Performed by:</p>
              <p>{cast.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
