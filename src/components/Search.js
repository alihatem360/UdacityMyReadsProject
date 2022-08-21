import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Search = () => {
  return (
    <Fragment>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title, author, or ISBN" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
