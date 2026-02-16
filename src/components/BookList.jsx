import BookCard from "./BookCard";

function BookList({ books, onSeeMore }) {
  return (
    <div className="parent-container">
      {books.map((book) => (
        <div className="col-md-3 mb-3">
          {<BookCard key={book.id} book={book} onSeeMore={onSeeMore} />}
        </div>
      ))}{" "}
    </div>
  );
}

export default BookList;
