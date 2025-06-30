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
    </div>
  );
};

export default Filters;
