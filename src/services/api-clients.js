const BASE_URL = "https://www.googleapis.com/books/v1";

async function fetchBooks(query, controller) {
  // fxn that will return (await of) book items
  try {
    const res = await fetch(`${BASE_URL}/volumes?q=${query}`, {
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new Error(`API call failed: ${res.status}`);
    }
    const data = await res.json();
    return data.items || [];
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.log("Error fetching books: ", err.message);
    }
  }
}

export default fetchBooks;
