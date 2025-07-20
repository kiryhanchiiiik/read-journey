import { useLocation } from "react-router-dom";
import css from "./MyReadingBook.module.scss";

type Book = {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPage: string;
};

const MyReadingBook = () => {
  const location = useLocation();
  const book = location.state as Book;

  return (
    <div className={css.myReading}>
      <h3>My reading</h3>
      <div className={css.bookContainer}>
        <img className={css.bookPhoto} src={book.imageUrl} alt={book.title} />
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      <button className={css.startBtn}>
        <svg width={40} height={40}>
          <use href="/public/sprite.svg#block"></use>
        </svg>
      </button>
    </div>
  );
};

export default MyReadingBook;
