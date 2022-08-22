import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Bookshelf from "./Bookshelf/Bookshelf";
const bookList = ({ bookList , ChangeBookShelf}) => {
  const shelves = ["currentlyReading", "wantToRead", "read"];

  return (
    <Fragment>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <Bookshelf bookList={bookList} shelfName={shelves[0]} ChangeBookShelf={ChangeBookShelf}/>
            <Bookshelf bookList={bookList} shelfName={shelves[1]} ChangeBookShelf={ChangeBookShelf}/>
            <Bookshelf bookList={bookList} shelfName={shelves[2]} ChangeBookShelf={ChangeBookShelf}/>
          
            {
              // <Bookshelf ShelfName="Current reading" bookList={bookList} />
            }{" "}
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
