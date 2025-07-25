import { useState } from "react";
import clsx from "clsx";
import css from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const buildLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(css.menuLink, isActive && css.active);

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(user);

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
          <Link to="/" className={css.logo}>
            <img src="/logo.svg" alt="" />
          </Link>
        </div>
        <div className={css.menuWrapper}>
          <div className={css.avatarName}>
            {user.name ? user.name.charAt(0) : "?"}
          </div>
          <button className={css.openBtn} type="button" onClick={toggleMenu}>
            <svg width={28} height={28}>
              <use href={`/sprite.svg#menu`} />
            </svg>
          </button>
          {isMenuOpen && (
            <div className={css.menuOverlay} onClick={closeMenu} />
          )}
          <nav className={`${css.mobileMenu} ${isMenuOpen ? css.open : ""}`}>
            <button className={css.closeBtn} onClick={closeMenu}>
              <svg width={28} height={28}>
                <use href="/sprite.svg#cross" />
              </svg>
            </button>
            <ul className={css.list}>
              <li>
                <NavLink className={buildLinkClass} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={buildLinkClass} to="/library">
                  My library
                </NavLink>
              </li>
            </ul>
            <button onClick={onLogout} className={css.logoutBtn}>
              Log out
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
