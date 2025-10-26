import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import s from "./Header.module.css";

const getClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? s.activeLink : s.link;

export default function Header() {
  return (
    <>
      <header className={s.header}>
        <nav>
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) => (isActive ? s.linkActive : s.link)}
          >
            Home
          </NavLink>
          <NavLink to={ROUTES.RANDOM_JOKE} className={getClass}>
            Random joke
          </NavLink>
          <NavLink to={ROUTES.SPACE_MISSION} className={getClass}>
            Space mission
          </NavLink>
          <NavLink to={ROUTES.AGE_BY_NAME} className={getClass}>
            Age by name
          </NavLink>
          <NavLink to={ROUTES.COUNTER} className={getClass}>
            Counter
          </NavLink>
          <NavLink to={ROUTES.EFFECT_EXAMPLE} className={getClass}>
            Effect example
          </NavLink>
          <NavLink to={ROUTES.WEIGHT_CALCULATOR} className={getClass}>
            Weight calculator
          </NavLink>
          <NavLink to={ROUTES.COHORT_68} className={getClass}>
            Cohort 68
          </NavLink>
          <NavLink to={ROUTES.ABOUT} className={getClass}>
            About
          </NavLink>
          <NavLink to={ROUTES.CONTACT} className={getClass}>
            Contact
          </NavLink>
          <NavLink to={ROUTES.ACCOUNT} className={getClass}>
            Account
          </NavLink>
          <NavLink to="/products" className={getClass}>
            Products
          </NavLink>
          <NavLink to="/users" className={getClass}>
            Users
          </NavLink>
          <NavLink to="/parent" className={getClass}>
            Parent
          </NavLink>
          <NavLink to="/signin" className={getClass}>
            Signin
          </NavLink>
          <NavLink to="/categories" className={getClass}>
            Categories
          </NavLink>
        </nav>
      </header>
    </>
  );
}
