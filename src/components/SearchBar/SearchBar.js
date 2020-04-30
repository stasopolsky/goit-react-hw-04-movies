/* eslint-disable  */

import React, { Component } from "react";
import css from "./SearchBar.module.css";

class SearchBar extends Component {
  state = {
    inputValue: "",
  };

  handleChange = ({ target }) => {
    this.setState({ inputValue: target.value });
    this.props.onChange(target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className={css.searchFormWrapper}>
        <form onSubmit={this.handleSubmit}>
          <input
            className={css.searchForm}
            type="text"
            value={inputValue}
            placeholder="Let's find a movie!"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
