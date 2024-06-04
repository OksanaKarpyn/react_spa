import React from "react";
import { Link } from "react-router-dom";
function NoteBook() {
  return (
    <>
      <h3>Page NoteBook</h3>
      <Link to="/category"> &lArr; Back to all Category</Link>
    </>
  );
}
export default NoteBook;
