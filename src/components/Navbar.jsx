import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </div>
  );
};

export default Navbar;
