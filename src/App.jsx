import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import fetchBooks from "./services/api-clients";
import useBooks from "./services/useBooks";
import BookDetail from "./components/BookDetail";

function App() {
  const { books, isLoading, setSearchTerm } = useBooks("fiction");
  const [selectedBook, setSelectedBook] = useState(null);
  function handleSearch(query) {
    setSearchTerm(query);
  }

  function handlSeeMore(book) {
    setSelectedBook(book);
  }

  function handleCloseModal() {
    setSelectedBook(null);
  }

  return (
    <>
      {" "}
      <NavBar onSearch={handleSearch} />
      {isLoading ? (
        <p className="placeholder-glow display-3">
          <span className="placeholder col-12 text-dark">{"LOADING"}</span>
        </p>
      ) : (
        <BookList books={books} onSeeMore={handlSeeMore} />
      )}
      {selectedBook && (
        <p>{`This book's title is ${selectedBook.volumeInfo.title}`}</p>
      )}
      <Footer />
      {selectedBook && (
        <BookDetail book={selectedBook} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
