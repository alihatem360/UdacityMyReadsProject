import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BookItem from "./BookItem/BookItem";
const Search = ({ handelSearchBooks, searchBooks , ChangeBookShelf }) => {
  const handledlChanged = (e) => {
    handelSearchBooks(e.target.value);
  };
  return (
    <Fragment>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={handledlChanged}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks && searchBooks.length > 0 ? (
              searchBooks.map((book, index) => (
                <BookItem key={index} book={book} ChangeBookShelf={ChangeBookShelf}/>
              ))
            ) : (
              <b className="no-results" style={{textTransform : 'uppercase'}}>on books</b>
            )}
          </ol>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
