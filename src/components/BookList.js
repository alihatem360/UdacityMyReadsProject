import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Bookshelf from "./Bookshelf/Bookshelf";
const bookList = () => {
  return (
    <Fragment>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <Bookshelf />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default bookList;
