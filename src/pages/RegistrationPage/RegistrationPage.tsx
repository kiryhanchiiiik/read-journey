import PhotoContent from "../../components/PhotoContent/PhotoContent";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  return (
    <section className={css.regPage}>
      <div className={css.contentWrapper}>
        <RegistrationForm />
        <PhotoContent />
      </div>
    </section>
  );
};

export default RegistrationPage;
