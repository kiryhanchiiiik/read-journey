import { useState } from "react";
import * as Yup from "yup";
import css from "./LoginForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { login } from "../../redux/auth/operations";

interface LoginFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Email must be a valid format")
    .required("Required!"),

  password: Yup.string().min(7, "Too short!").required("Required!"),
});

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await dispatch(login(data));

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 5000,
      });
      reset();
    } catch (err) {
      console.error("Login error:", err);

      toast.error("Failed login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        closeOnClick: true,
      });
    }
  };

  return (
    <div className={css.regFormSect}>
      <div className={css.regFormWrapper}>
        <div className={css.logoWrapper}>
          <a href="#" className={css.logo}>
            <img src="/public/logo.svg" alt="Logotype" />
          </a>
        </div>
        <h1 className={css.title}>
          Expand your mind, reading{" "}
          <span className={css.grayTitle}>a book</span>
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={css.inputContainer}>
            {/* email */}
            <div className={css.inputWrapper}>
              <label htmlFor="email" className={css.label}>
                Mail:
              </label>
              <input
                id="email"
                className={css.input}
                type="email"
                {...register("email")}
                placeholder="Your@email.com"
              />
              <div className={css.error}>{errors.email?.message}</div>
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
                  {...register("password")}
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
              <div className={css.error}>{errors.password?.message}</div>
            </div>

            <div className={css.btnContainer}>
              <button className={css.loginBtn} type="submit">
                Log in
              </button>
              <Link className={css.loginLink} to="/register">
                Don’t have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
