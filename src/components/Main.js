import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Experiences from "./Experiences";
import Contact from "./Contact";
import Home from "./Home";

export default function Main() {
  const [currentRoute, setCurrentRoute] = useState("/");

  return (
    <BrowserRouter>
      <div>
        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle">
          <i></i>
        </a>
        <aside
          id="colorlib-aside"
          role="complementary"
          className="js-fullheight text-center"
        >
          <h1 id="colorlib-logo">
            <Link to="/" onClick={() => setCurrentRoute("/")}>
              merlin<span>.</span>
            </Link>
          </h1>
          <nav id="colorlib-main-menu" role="navigation">
            <ul>
              <li className={currentRoute === "/" ? "colorlib-active" : ""}>
                <Link to="/" onClick={() => setCurrentRoute("/")}>
                  Home
                </Link>
              </li>
              <li
                className={
                  currentRoute === "/experiences" ? "colorlib-active" : ""
                }
              >
                <Link
                  to="/experiences"
                  onClick={() => setCurrentRoute("/experiences")}
                >
                  Experiences
                </Link>
              </li>
              <li
                className={currentRoute === "/contact" ? "colorlib-active" : ""}
              >
                <Link to="/contact" onClick={() => setCurrentRoute("/contact")}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
