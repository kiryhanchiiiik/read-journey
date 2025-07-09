import { Link } from "react-router-dom";
import css from "./Filters.module.scss";
import { useAppDispatch, type RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { setTitle, setAuthor } from "../../redux/filters/slice";
import { useState } from "react";

const Filters = () => {
  const dispatch = useAppDispatch();
  const { title, author } = useSelector((state: RootState) => state.filters);

  // локальное состояние
  const [localTitle, setLocalTitle] = useState(title);
  const [localAuthor, setLocalAuthor] = useState(author);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setTitle(localTitle));
    dispatch(setAuthor(localAuthor));
  };

  return (
    <div className={css.filters}>
      <div className={css.formContainer}>
        <span className={css.filterLabel}>Filters:</span>
        <form onSubmit={handleSubmit}>
          <div className={css.formWrapper}>
            <div className={css.inputWrapper}>
              <label htmlFor="title" className={css.label}>
                Book title:
              </label>
              <input
                id="title"
                className={css.input}
                type="text"
                value={localTitle}
                onChange={(e) => setLocalTitle(e.target.value)}
                placeholder="Enter text"
              />
            </div>
            <div className={css.inputWrapper}>
              <label htmlFor="author" className={css.label}>
                The author:
              </label>
              <input
                id="author"
                className={`${css.input} ${css.inputMargin}`}
                type="text"
                value={localAuthor}
                onChange={(e) => setLocalAuthor(e.target.value)}
                placeholder="Enter text"
              />
            </div>
            <div className={css.btnContainer}>
              <button className={css.applyBtn} type="submit">
                To apply
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* остальной блок про тренировку */}
      <div className={css.libraryContainer}>
        <h2>Start your workout</h2>
        <ul className={css.stepNav}>
          <li>
            <div className={css.stepNavWrapper}>
              <div className={css.numberCustom}>1</div>
              <div>
                <p className={css.subTitle}>
                  <span>Create a personal library:</span> add the books you
                  intend to read to it.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={css.stepNavWrapper}>
              <div className={css.numberCustom}>2</div>
              <div>
                <p className={`${css.subTitle} ${css.subTitleWidth}`}>
                  <span>Create your first workout:</span> define a goal, choose
                  a period, start training.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <Link className={css.link} to="/library">
          My library
          <svg width={24} height={24}>
            <use href="/sprite.svg#arrow"></use>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Filters;
