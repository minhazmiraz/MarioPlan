import { BrowserRouter as Router, NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <Router>
      <ul className="right">
        <li>
          <NavLink to="/">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            MM
          </NavLink>
        </li>
      </ul>
    </Router>
  );
};

export default SignedInLinks;
