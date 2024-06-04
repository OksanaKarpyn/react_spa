import React from "react";
import { Link } from "react-router-dom";
function CatDescription() {
  return (
    <>
      <h3>Page Category Description</h3>
      <Link to="/category"> &lArr; Back to all Category</Link>
    </>
  );
}
export default CatDescription;
