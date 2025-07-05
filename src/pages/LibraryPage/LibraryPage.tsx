import Header from "../../components/Header/Header";
import LibraryFilter from "../../components/LibraryFilter/LibraryFilter";
import MyLibrary from "../../components/MyLibrary/MyLibrary";
import css from "./LibraryPage.module.scss";

const LibraryPage = () => {
  return (
    <section className={css.library}>
      <Header />
      <LibraryFilter />
      <MyLibrary />
    </section>
  );
};

export default LibraryPage;
