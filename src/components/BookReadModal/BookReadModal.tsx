// import { useAppDispatch } from "../../redux/store";
import css from "./BookReadModal.module.scss";

type BookReadModalProps = {
  book: Book;
  onClose: () => void;
};

const BookReadModal = ({ book, onClose }: BookReadModalProps) => {
  //   const dispatch = useAppDispatch();

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleAddLibrary = () => {
    // dispatch(addBook(book));
    onClose();
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
          Start read
        </button>
      </div>
    </div>
  );
};

export default BookReadModal;
