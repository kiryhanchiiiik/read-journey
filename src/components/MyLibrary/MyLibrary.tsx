import { useState, useRef, useEffect } from "react";
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
                <svg width="12" height="12">
                  {/* <use href={`${sprite}#down`} /> */}
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
    </div>
  );
};

export default MyLibrary;
