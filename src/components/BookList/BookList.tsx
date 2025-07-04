import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import { authInstance } from "../../redux/auth/operations";
import css from "./BookList.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const BookList = () => {
  const [books, setBooks] = useState<any[] | null>(null);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await authInstance.get("/books/recommend");
        setBooks(response.data.results);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className={css.bookList}>
      <h1>Recommended</h1>

      {Array.isArray(books) && books.length > 0 && (
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
            {books.map((book) => (
              <SwiperSlide key={book._id}>
                <div className={css.contentWrapper}>
                  <img
                    className={css.contentImg}
                    src={book.imageUrl}
                    alt={book.title}
                  />
                  <h3 className={css.contentTitle}>{book.title}</h3>
                  <p className={css.authorPh}>{book.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default BookList;
