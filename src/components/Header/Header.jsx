import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.logo}>
        <span className={css.logoBold}>Travel</span>
        <span className={css.logoNormal}>Trucks</span>
      </NavLink>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
