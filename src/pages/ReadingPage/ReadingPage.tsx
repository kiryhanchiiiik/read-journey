import Header from "../../components/Header/Header";
import Progress from "../../components/Progress/Progress";
import css from "./ReadingPage.module.scss";

const ReadingPage = () => {
  return (
    <section className={css.redingPage}>
      <Header />
      <Progress />
    </section>
  );
};

export default ReadingPage;
