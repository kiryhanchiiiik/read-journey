import css from "./Progress.module.scss";
import star from "../../img/star.png";

const Progress = () => {
  return (
    <div className={css.progress}>
      <span className={css.spanDesc}>Start page:</span>
      <div className={css.inputWrapper}>
        <label htmlFor="page" className={css.label}>
          Page number:
        </label>
        <input
          id="page"
          className={`${css.input} ${css.inputLastMargin}`}
          type="text"
          placeholder="0"
        />
        <button className={css.startBtn}>To start</button>
      </div>
      <div className={css.progressContent}>
        <h3>Progress</h3>
        <p>
          Here you will see when and how much you read. To record, click on the
          red button above.
        </p>
        <div className={css.starContainer}>
          <img src={star} alt="Star" />
        </div>
      </div>
    </div>
  );
};

export default Progress;
