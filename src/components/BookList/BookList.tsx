import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import BookModal from "./../BookModal/BookModal";
import like from "../../img/like.png";
import "swiper/css";
import "swiper/css/navigation";
import css from "./BookList.module.scss";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const BookList = () => {
  const [books, setBooks] = useState<any[] | null>(null);
  const [selectedBook, setSelectedBook] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModal, setIsConfirmModal] = useState(false);

  const { title: filterTitle, author: filterAuthor } = useSelector(
    (state: RootState) => state.filters
  );

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const filteredBooks = books?.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(filterAuthor.toLowerCase());
    return matchesTitle && matchesAuthor;
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get("/books/recommend");
        setBooks(response.data.results);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const openModal = (book: any) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const handleAddToLibrary = () => {
    setIsConfirmModal(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModal(false);
  };

  return (
    <div className={css.bookList}>
      <h1>Recommended</h1>

      {Array.isArray(filteredBooks) && filteredBooks.length > 0 && (
        <>
          <div className={css.btnWrapper}>
            <button ref={prevRef} className={css.customPrevBtn}>
              <svg width={16} height={16}>
                <use href="/sprite.svg#swiper-arrow"></use>
              </svg>
            </button>
            <button ref={nextRef} className={css.customNextBtn}>
              <svg width={16} height={16}>
                <use href="/sprite.svg#swiper-arrow"></use>
              </svg>
            </button>
          </div>

          <Swiper
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className={css.swiper}
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={20}
            onBeforeInit={(swiper) => {
              if (
                typeof swiper.params.navigation !== "boolean" &&
                swiper.params.navigation
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
          >
            {filteredBooks.map((book) => (
              <SwiperSlide key={book._id}>
                <div className={css.contentWrapper}>
                  <img
                    className={css.contentImg}
                    src={book.imageUrl}
                    alt={book.title}
                    onClick={() => openModal(book)}
                    style={{ cursor: "pointer" }}
                  />
                  <h3 className={css.contentTitle}>{book.title}</h3>
                  <p className={css.authorPh}>{book.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}

      {filteredBooks?.length === 0 && (
        <p className={css.noBooksText}>No books match your filters😕</p>
      )}

      {isModalOpen && selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={closeModal}
          onAdd={handleAddToLibrary}
        />
      )}

      {isConfirmModal && (
        <div className={css.modalOverlay} onClick={closeConfirmModal}>
          <div
            className={css.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeConfirmModal} className={css.closeBtn}>
              <svg width={25} height={25}>
                <use href="/sprite.svg#cross"></use>
              </svg>
            </button>
            <div className={css.confirmText}>
              <div className={css.confirmTextWrapper}>
                <img className={css.likeImg} src={like} alt="like" />
                <div>
                  <h3>Good job</h3>
                  <p>
                    Your book is now in <span>the library!</span> The joy knows
                    no bounds and now you can start your training
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
