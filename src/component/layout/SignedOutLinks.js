import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signin">Sign in</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign up</NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
