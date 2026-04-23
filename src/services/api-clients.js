const BASE_URL = "https://openlibrary.org";

async function fetchBooks(query, controller) {
  try {
    const res = await fetch(`${BASE_URL}/search.json?q=${encodeURIComponent(query)}`, {
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new Error(`API call failed: ${res.status}`);
    }

    const data = await res.json();

   return (data.docs || []).map((book) => ({
      id: book.key,
      volumeInfo: {
        title: book.title,
        authors: book.author_name || ["Unknown Author"],
        publishedDate: book.first_publish_year?.toString() || "N/A",
        languages: book.language || [], 
        imageLinks: {
          thumbnail: book.cover_i 
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
            : null,
        },
      },
    }));
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.log("Error fetching books: ", err.message);
    }
    return [];
  }
}

export default fetchBooks;