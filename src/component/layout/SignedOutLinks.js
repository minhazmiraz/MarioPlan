import { BrowserRouter as Router, NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <Router>
      <ul className="right">
        <li>
          <NavLink to="/">Sign in</NavLink>
        </li>
        <li>
          <NavLink to="/">Sign up</NavLink>
        </li>
      </ul>
    </Router>
  );
};

export default SignedInLinks;
