import React from "react";
import css from "./BookModal.module.scss";
import { useAppDispatch } from "../../redux/store";
import { addBook } from "../../redux/books/slice";
import { axiosInstance } from "../../api/axiosInstance";

type Book = {
  _id: string;
  imageUrl: string;
  title: string;
  author: string;
  totalPages: string;
};

type Props = {
  book: Book;
  onClose: () => void;
  onAdd: () => void;
};

const BookModal: React.FC<Props> = ({ book, onClose, onAdd }) => {
  const dispatch = useAppDispatch();

  const handleAddLibrary = async () => {
    try {
      const response = await axiosInstance.post(`/books/add/${book._id}`);
      console.log(response);
      dispatch(addBook(response.data));

      onAdd();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

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
        <p className={css.authorPh}>{book.author}</p>
        <p className={css.pagesPh}>{book.totalPages} pages</p>
        <button onClick={handleAddLibrary} className={css.addBtn}>
          Add to library
        </button>
      </div>
    </div>
  );
};

export default BookModal;
