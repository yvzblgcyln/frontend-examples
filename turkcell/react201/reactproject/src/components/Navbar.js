import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="menu">
        <button onClick={() => navigate(-1)}> Back </button>
        <li>
          <Link to="/"> Anasayfa </Link>
        </li>
        <li>
          <Link to="/users"> User </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
        <button onClick={() => navigate("auth")}> Login</button>
      </ul>
    </div>
  );
}
