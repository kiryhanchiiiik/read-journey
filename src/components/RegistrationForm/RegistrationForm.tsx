import { useState } from "react";
import css from "./RegistrationForm.module.scss";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

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
                required
                placeholder="Ilona Ratushniak"
              />
              <div className={css.error}></div>
            </div>

            {/* email */}
            <div className={css.inputWrapper}>
              <label htmlFor="email" className={css.label}>
                Email:
              </label>
              <input
                id="email"
                className={css.input}
                type="email"
                required
                placeholder="Your@email.com"
              />
              <div className={css.error}></div>
            </div>

            {/* password */}
            <div className={`${css.inputWrapper} ${css.lastInputWrapper}`}>
              <label htmlFor="password" className={css.label}>
                Password:
              </label>
              <div className={css.passwordField}>
                <input
                  id="password"
                  className={`${css.input} ${css.lastInput}`}
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Yourpasswordhere"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={css.togglePasswordBtn}
                >
                  <svg className={css.eyeIcon} width={18} height={18}>
                    <use
                      href={
                        showPassword
                          ? "/sprite.svg#icon-eye"
                          : "/sprite.svg#eye-off"
                      }
                    />
                  </svg>
                </button>
              </div>
              <div className={css.error}></div>
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
