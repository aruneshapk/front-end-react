function BookCard({ book, onSeeMore }) {
  const {
    title = "No Title Available",
    authors = ["Unknown Authors"],
    imageLinks = {},
  } = book.volumeInfo;

  const thumbnail = imageLinks.thumbnail || "https://placehold.co/180x280";

  return (
    <div className="mx-auto">
      <div className="card">
        <img className="card-img-top" src={thumbnail || null} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{authors?.join(", ") || "Unknown author"}</p>
          <button className="btn btn-primary" onClick={() => onSeeMore(book)}>
            {" "}
            See more
          </button>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
