import { Outlet, Link } from "react-router-dom";
import "./styles.css";

function AuthLayout() {
  return (
    <div className="auth-container">
      <div className="auth-menu">
        <Link to="/">Menu</Link>
        <Link to="">Log in</Link>
        <Link to="register">Sign in</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
