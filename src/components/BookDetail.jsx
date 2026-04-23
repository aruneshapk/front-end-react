function BookDetail({ book, onClose }) {
  if (!book || !book.volumeInfo) return null;

  const { title, authors, imageLinks, publishedDate, languages } = book.volumeInfo;

  const thumbnail = imageLinks?.thumbnail || "https://placehold.co/180x280";

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title || "No Title Available"}</h5>
          </div>
          <div className="modal-body text-center">
            {}
            <img 
              src={thumbnail} 
              alt={title} 
              className="img-fluid mb-3 rounded shadow-sm" 
              style={{ maxHeight: "400px" }}
            />
            <div className="text-start mt-3">
              <p>
                <strong>Authors:</strong>{" "}
                {authors?.join(", ") || "Unknown Authors"}
              </p>
              <p>
                <strong>Published Date:</strong>{" "}
                {publishedDate || "No publish details available"}
              </p>
              <div>
                <strong>Languages:</strong>{" "}
                {languages?.slice(0, 5).map(lang => (
                  <span key={lang} className="badge bg-light text-dark border me-1 text-uppercase">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
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