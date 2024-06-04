//import { NavLink } from "react-router-dom";
import Nav from "./Nav";
function Header(props) {
  return (
    <nav>
      <ul className="header-list">
        <Nav data={props.data} />
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/category">Category</NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
export default Header;
