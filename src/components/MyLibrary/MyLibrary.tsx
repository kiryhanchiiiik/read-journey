import { useState, useRef, useEffect } from "react";
import book from "../../img/book.png";
import css from "./MyLibrary.module.scss";

const filterOptions = ["Unread", "In progress", "Done", "All books"];

const MyLibrary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("All books");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={css.myLibrary}>
      <div className={css.libraryContainer}>
        <h1 className={css.libraryTitle}>My library</h1>
        <div className={css.wrapper} ref={dropdownRef}>
          <div className={css.customSelect}>
            <button
              type="button"
              className={css.selectButton}
              onClick={handleToggle}
            >
              {selected}
              <div className={`${css.arrow} ${isOpen ? css.arrowUp : ""}`}>
                <svg width={16} height={16}>
                  <use href="/sprite.svg#icon-down" />
                </svg>
              </div>
            </button>

            {isOpen && (
              <ul className={css.dropdownList}>
                {filterOptions.map((option) => (
                  <li
                    key={option}
                    className={css.dropdownItem}
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className={css.flexContainer}>
        <div className={css.noBookContainer}>
          <img src={book} alt="" />
        </div>
        <p className={css.noBookDesc}>
          To start training, <span>add some of your books</span> or from the
          recommended ones
        </p>
      </div>
    </div>
  );
};

export default MyLibrary;
