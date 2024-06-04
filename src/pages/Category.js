import React from "react";
import { Link } from "react-router-dom";

function Category(props) {
  return (
    <>
      <h3>Page Category</h3>
      <Link to="/category/description">Category Description</Link>
      <nav>
        <ul>
          {props.data.map((item) => (
            <li key={item.link}>
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Category;
