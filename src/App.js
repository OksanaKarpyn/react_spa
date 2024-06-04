import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import About from "./pages/About";
import CatDescription from "./pages/CategoryDescription";
import Error from "./pages/Error";
// nested page
import NoteBook from "./pages/NoteBook";
import Monitor from "./pages/Monitor";
import MobilePhone from "./pages/MobilePhone";
const navHeader = [
  { link: "/", text: "Home" },
  { link: "/about", text: "About" },
  { link: "/category", text: "Category" },
];
const navCategory = [
  { link: "/category/notebook", text: "NoteBook" },
  { link: "/category/monitor", text: "Monitor" },
  { link: "/category/cellphone", text: "Mobile Phone" },
];

function App() {
  return (
    <>
      <div className="app-wrapper">
        {/* <h2>sono paggina app</h2> */}
        <Router>
          <div className="app-header">
            <Header data={navHeader} />
          </div>
          <div className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/category"
                element={<Category data={navCategory} />}
              />
              <Route
                path="/category/description"
                element={<CatDescription />}
              />
              <Route path="*" element={<Error />} />
              <Route path="/category/notebook" element={<NoteBook />} />
              <Route path="/category/monitor" element={<Monitor />} />
              <Route path="/category/cellphone" element={<MobilePhone />} />
            </Routes>
          </div>
        </Router>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
