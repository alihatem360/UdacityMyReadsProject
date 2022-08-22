import React, { Fragment } from "react";
import BookItem from "../BookItem/BookItem";
const Bookshelf = ({ shelfName, bookList , ChangeBookShelf}) => {
  return (
    <Fragment>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList.map((book, index) => (
              <BookItem key={index} book={book} shelfName={shelfName} ChangeBookShelf={ChangeBookShelf}/>
            ))}
          </ol>
        </div>
      </div>
    </Fragment>
  );
};

export default Bookshelf;
