import React from "react";
import css from "./BookModal.module.scss";

type Book = {
  _id: string;
  imageUrl: string;
  title: string;
  author: string;
};

type Props = {
  book: Book;
  onClose: () => void;
};

const BookModal: React.FC<Props> = ({ book, onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={css.modalOverlay} onClick={handleOverlayClick}>
      <div className={css.modalContent} onClick={handleContentClick}>
        <button onClick={onClose} className={css.closeBtn}>
          <svg width={25} height={25}>
            <use href="/sprite.svg#cross"></use>
          </svg>
        </button>
        <img src={book.imageUrl} alt={book.title} className={css.modalImage} />
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <button className={css.addBtn}>Add to library</button>
      </div>
    </div>
  );
};

export default BookModal;
