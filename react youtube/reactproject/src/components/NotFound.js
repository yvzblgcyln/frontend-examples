import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
        <p>404 NotFound</p>
        <Link to="/"> Go back Home</Link>
    </div>
  )
}

export default NotFound