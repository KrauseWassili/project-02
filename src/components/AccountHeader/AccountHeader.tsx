import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import s from "./AccountHeader.module.css";

export default function AccountHeader() {
  return (
    <>
      <header className={s.header}>
        <nav>
          <NavLink to={ROUTES.HOME} className={s.link}>
            Home
          </NavLink>
          <NavLink to={ROUTES.ACCOUNT} className={s.link}>
            Account
          </NavLink>
          <NavLink to={ROUTES.ACCOUNT_SETTINGS} className={s.link}>
            Settings
          </NavLink>
          <NavLink to={ROUTES.ACCOUNT_USER} className={s.link}>
            User info
          </NavLink>
          
        </nav>
      </header>
    </>
  );
}
