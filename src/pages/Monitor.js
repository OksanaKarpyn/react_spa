import React from "react";
import { Link } from "react-router-dom";
function Screen() {
  return (
    <>
      <h3>Page Monitor</h3>
      <Link to="/category"> &lArr; Back to all Category</Link>
    </>
  );
}
export default Screen;
