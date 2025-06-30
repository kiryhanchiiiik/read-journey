import { Link } from "react-router-dom";
import css from "./Filters.module.scss";

const Filters = () => {
  return (
    <div className={css.filters}>
      <div className={css.formContainer}>
        <span className={css.filterLabel}>Filters:</span>
        <form>
          <div className={css.formWrapper}>
            <div className={css.inputWrapper}>
              <label htmlFor="name" className={css.label}>
                Book title:
              </label>
              <input
                id="name"
                className={css.input}
                type="text"
                // {...formRegister("name")}
                placeholder="Enter text"
              />
              {/* <div className={css.error}>{errors.name?.message}</div> */}
            </div>
            <div className={css.inputWrapper}>
              <label htmlFor="name" className={css.label}>
                The author:
              </label>
              <input
                id="name"
                className={`${css.input} ${css.inputMargin}`}
                type="text"
                // {...formRegister("name")}
                placeholder="Enter text"
              />
              {/* <div className={css.error}>{errors.name?.message}</div> */}
            </div>
            <div className={css.btnContainer}>
              <button className={css.applyBtn} type="submit">
                To apply
              </button>
            </div>
          </div>
        </form>
      </div>
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
            <use href="/public/sprite.svg#arrow"></use>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Filters;
