import { NavLink } from "react-router-dom";
function Nav(props) {
  return (
    <>
      {props.data.map((item) => (
        <li key={item.link}>
          <NavLink to={item.link}>{item.text}</NavLink>
        </li>
      ))}
    </>
  );
}
export default Nav;
