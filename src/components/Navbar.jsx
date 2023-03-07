import "../styles/Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-link" to="/signup">
        SignUp
      </Link>
      <Link className="navbar-link" to="/signin">
        SignIn
      </Link>
    </div>
  );
};
