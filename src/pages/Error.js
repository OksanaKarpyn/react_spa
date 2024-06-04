import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <>
      <h3>Page Error 404</h3>
      <Link to="/"> &lArr; Back </Link>
    </>
  );
}
export default Error;
