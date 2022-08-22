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
                <select onChange={handledlChanged} value={shelfName}>
                  <option value="none" disabled>
                    Move to...
                  </option>
                  <option
                    value="currentlyReading"
                    selected={shelfName === book.shelf}
                  >
                    Currently Reading
                  </option>
                  <option value="wantToRead" selected={shelfName === book.shelf} >Want to Read</option>
                  <option value="read" selected={shelfName === book.shelf}>Read</option>
                  <option value="none" selected={shelfName === book.shelf}>None</option>
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
