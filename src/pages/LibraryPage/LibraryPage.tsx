import Header from "../../components/Header/Header";
import LibraryFilter from "../../components/LibraryFilter/LibraryFilter";
import css from "./LibraryPage.module.scss";

const LibraryPage = () => {
  return (
    <section className={css.library}>
      <Header />
      <LibraryFilter />
    </section>
  );
};

export default LibraryPage;
