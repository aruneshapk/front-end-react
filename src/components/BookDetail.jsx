function BookDetail({ book, onClose }) {
  if (!book || !book.volumeInfo) return null;

  const { volumeInfo, publishedDate } = book;
  const { title, authors, imageLinks, description } = volumeInfo;

  const thumbnail = imageLinks?.thumbnail || "https://placehold.co/180x280";

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title || "No Title Available"}</h5>
          </div>
          <div className="modal-body">
            <img src={thumbnail} alt={title} className="img-fluid mb-3" />
            <p>
              <strong>Authors:</strong>{" "}
              {authors?.join(", ") || "Unknown Authors"}
            </p>
            <p>
              <strong>Published Date:</strong>{" "}
              {publishedDate || "No publish details available"}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {description || "No description available"}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookDetail;
