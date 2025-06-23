import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  return (
    <section className={css.regPage}>
      <RegistrationForm />
    </section>
  );
};

export default RegistrationPage;
