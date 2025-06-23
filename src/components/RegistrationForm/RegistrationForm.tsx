import css from "./RegistrationForm.module.scss";
const RegistrationForm = () => {
  return (
    <div className={css.regFormSect}>
      <div className={css.regFormWrapper}>
        <div className={css.logoWrapper}>
          <a href="#" className={css.logo}>
            <img src="/public/logo.svg" alt="" />
          </a>
        </div>
        <h1 className={css.title}>
          Expand your mind, reading{" "}
          <span className={css.grayTitle}>a book</span>
        </h1>

        <form>
          <div className={css.inputContainer}>
            {/* name */}
            <div className={css.inputWrapper}>
              <label htmlFor="name" className={css.label}>
                Name:
              </label>
              <input
                id="name"
                className={css.input}
                type="text"
                // {...register("name")}
                required
                placeholder="Ilona Ratushniak"
              />
              <div className={css.error}>
                {/* errors.name && errors.name.message */}
              </div>
            </div>

            {/* email */}
            <div className={css.inputWrapper}>
              <label htmlFor="name" className={css.label}>
                Email:
              </label>
              <input
                id="name"
                className={css.input}
                type="text"
                // {...register("email")}
                required
                placeholder="Your@email.com"
              />
              <div className={css.error}>
                {/* errors.name && errors.name.message */}
              </div>
            </div>

            {/* password */}
            <div className={css.inputWrapper}>
              <label htmlFor="name" className={css.label}>
                Password:
              </label>
              <input
                id="name"
                className={`${css.input} ${css.lastInput}`}
                type="text"
                // {...register("email")}
                required
                placeholder="Yourpasswordhere"
              />
              <div className={css.error}>
                {/* errors.name && errors.name.message */}
              </div>
            </div>
            <div className={css.btnContainer}>
              <button className={css.registerBtn} type="submit">
                Registration
              </button>
              <a className={css.loginLink} href="#">
                Already have an account?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
