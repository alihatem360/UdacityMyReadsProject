import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
