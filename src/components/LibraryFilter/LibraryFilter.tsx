import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { authInstance } from "../../redux/auth/operations";
import css from "./LibraryFilter.module.scss";

const getRandomBooks = (books: any[], count: number) => {
  const shuffled = [...books].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const LibraryFilter = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await authInstance.get("/books/recommend");
        const randomBooks = getRandomBooks(response.data.results, 3);
        setBooks(randomBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className={css.filters}>
      <div className={css.formContainer}>
        <span className={css.filterLabel}>Filters:</span>
        <form>
          <div className={css.formWrapper}>
            <div className={css.inputWrapper}>
              <label htmlFor="name" className={css.label}>
                Book title:
              </label>
              <input
                id="name"
                className={css.input}
                type="text"
                placeholder="Enter text"
              />
            </div>
            <div className={css.inputWrapper}>
              <label htmlFor="author" className={css.label}>
                The author:
              </label>
              <input
                id="author"
                className={`${css.input} ${css.inputMargin}`}
                type="text"
                placeholder="Enter text"
              />
            </div>
            <div className={css.inputWrapper}>
              <label htmlFor="page" className={css.label}>
                Number of pages:
              </label>
              <input
                id="page"
                className={`${css.input} ${css.inputLastMargin}`}
                type="text"
                placeholder="0"
              />
            </div>
            <div className={css.btnContainer}>
              <button className={css.applyBtn} type="submit">
                Add book
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className={css.libraryContainer}>
        <h2>Recommended books</h2>
        <ul className={css.stepNav}>
          {books.map((book) => (
            <li key={book._id} className={css.bookItem}>
              {" "}
              <div className={css.contentWrapper}>
                <img
                  className={css.contentImg}
                  src={book.imageUrl}
                  alt={book.title}
                />
                <h3 className={css.contentTitle}>{book.title}</h3>
                <p className={css.authorPh}>{book.author}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link className={css.link} to="/">
          Home
          <svg width={24} height={24}>
            <use href="/sprite.svg#arrow"></use>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default LibraryFilter;
