import { useState } from "react";
import css from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className={css.header}>
      <div className={css.headerContent}>
        <div className={css.logoWrapper}>
          <a href="#" className={css.logo}>
            <img src="/public/logo.svg" alt="" />
          </a>
        </div>
        <div className={css.menuWrapper}>
          <div className={css.avatarName}>I</div>
          <button className={css.openBtn} type="button" onClick={toggleMenu}>
            <svg width={28} height={28}>
              <use href={`/sprite.svg#menu`} />
            </svg>
          </button>
          <nav className={`${css.mobileMenu} ${isMenuOpen ? css.open : ""}`}>
            <button className={css.closeBtn} onClick={closeMenu}>
              <svg width={28} height={28}>
                <use href="/sprite.svg#cross" />
              </svg>
            </button>
            <ul className={css.list}>
              <li>Home</li>
              <li>My library</li>
            </ul>
            <button className={css.logoutBtn}>Log out</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
