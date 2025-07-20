import Header from "../../components/Header/Header";
import Progress from "../../components/Progress/Progress";
import css from "./ReadingPage.module.scss";
import MyReadingBook from "./../../components/MyReadingBook/MyReadingBook";

const ReadingPage = () => {
  return (
    <section className={css.redingPage}>
      <Header />
      <Progress />
      <MyReadingBook />
    </section>
  );
};

export default ReadingPage;
