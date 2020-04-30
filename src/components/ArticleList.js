import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ArticleList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <NavLink to={`/movies/${item.id}`}>{item.title || item.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};
ArticleList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default ArticleList;
