import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import Search from "./components/Search";
import * as BooksAPI from "./BooksAPI";
function App() {
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  useEffect(() => {
    console.log("App rendered");
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  const ChangeBookShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  };

  const handelSearchBooks = async (query) => {
    let results = [];
    await BooksAPI.search(query).then((res) => {
      results = res.map((booksSearch) => {
        books.forEach((book) => {
          if (booksSearch.id === book.id) booksSearch.shelf = book.shelf;
        });
        return booksSearch;
      });
    });
    console.log("Finalllll results ", results);
    setSearchBooks(results);
  };


  return (
    <div className="app">
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <BookList bookList={books} ChangeBookShelf={ChangeBookShelf} />
              }
            />
            <Route
              path="/search"
              element={
                <Search
                  handelSearchBooks={handelSearchBooks}
                  searchBooks={searchBooks}
                  ChangeBookShelf={ChangeBookShelf}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
