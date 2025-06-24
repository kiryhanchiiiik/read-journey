import css from "./PhotoContent.module.scss";
import phone from "../../img/phone.png";

const PhotoContent = () => {
  return (
    <div className={css.photoContainer}>
      <img src={phone} alt="Phone" />
    </div>
  );
};

export default PhotoContent;
