import React, { Fragment, useState } from "react";

const BookItem = ({ book, shelfName, ChangeBookShelf }) => {
  const handledlChanged = (event) => {
    ChangeBookShelf(book, event.target.value);
  };
  return (
    <Fragment>
      {book.shelf === shelfName ? (
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                }}
              ></div>
              <div className="book-shelf-changer">
                <select
                  onChange={handledlChanged}
                  defaultValue={book.shelf ? book.shelf : "none"}
                >
                  <option value="Move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
            <div className="book-authors">{book.shelf}</div>
          </div>
        </li>
      ) : (
        <span></span>
      )}
    </Fragment>
  );
};

export default BookItem;
