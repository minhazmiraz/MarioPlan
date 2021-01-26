import { BrowserRouter as Router, Link } from "react-router-dom";
import SignedInlinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const NavBar = () => {
  return (
    <Router>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            MarioPlan
          </Link>
          <SignedInlinks />
          <SignedOutLinks />
        </div>
      </nav>
    </Router>
  );
};

export default NavBar;
