import BookList from "../../components/BookList/BookList";
import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import css from "./RecommendedPage.module.scss";
const RecommendedPage = () => {
  return (
    <section className={css.homePage}>
      <Header />
      <Filters />
      <BookList />
    </section>
  );
};

export default RecommendedPage;
