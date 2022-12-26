import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <strong>example navbar</strong>
        <div>
            <Link to="/"> Home - </Link>
            <Link to="/filter"> Filter - </Link>
            <Link to="/button"> Button - </Link>
            <Link to="/inputs"> Inputs </Link>
        </div>
    </nav>
    
  )
}

export default Navbar