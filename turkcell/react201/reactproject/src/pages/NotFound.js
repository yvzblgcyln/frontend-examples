import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <strong>That page did not found </strong>
      <br />
      <Link to="/">go back main menu</Link>
    </div>
  );
}

export default NotFound;
