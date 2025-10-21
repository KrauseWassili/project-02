import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import s from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={s.header}>
        <nav>
          <NavLink to={ROUTES.HOME} className={s.link}>
            Home
          </NavLink>
          <NavLink to={ROUTES.RANDOM_JOKE} className={s.link}>
            Random joke
          </NavLink>
          <NavLink to={ROUTES.SPACE_MISSION} className={s.link}>
            Space mission
          </NavLink>
          <NavLink to={ROUTES.AGE_BY_NAME} className={s.link}>
            Age by name
          </NavLink>
          <NavLink to={ROUTES.COUNTER} className={s.link}>
            Counter
          </NavLink>
          <NavLink to={ROUTES.EFFECT_EXAMPLE} className={s.link}>
            Effect example
          </NavLink>
          <NavLink to={ROUTES.WEIGHT_CALCULATOR} className={s.link}>
            Weight calculator
          </NavLink>
          <NavLink to={ROUTES.COHORT_68} className={s.link}>
            Cohort 68
          </NavLink>
          <NavLink to={ROUTES.ABOUT} className={s.link}>
            About
          </NavLink>
          <NavLink to={ROUTES.CONTACT} className={s.link}>
            Contact
          </NavLink>
          <NavLink to={ROUTES.ACCOUNT} className={s.link}>
            Account
          </NavLink>
        </nav>
      </header>
    </>
  );
}
