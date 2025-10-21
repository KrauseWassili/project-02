import { Outlet } from "react-router-dom";
import AccountHeader from "../components/AccountHeader/AccountHeader";

export default function AccountLayout() {
  return (
    <div>
      <AccountHeader />
      <main>
        <Outlet />
      </main>
      <footer>Copyright ©2025 All Rights Reserved.</footer>
    </div>
  );
}
