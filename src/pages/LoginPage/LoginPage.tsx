import LoginForm from "../../components/LoginForm/LoginForm";
import PhotoContent from "../../components/PhotoContent/PhotoContent";
import css from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <section className={css.loginPage}>
      <div className={css.contentWrapper}>
        <LoginForm />
        <PhotoContent />
      </div>
    </section>
  );
};

export default LoginPage;
