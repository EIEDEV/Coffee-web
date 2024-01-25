import React from "react";
import data from "./data";
import "./navbar.css";
import { FaCoffee } from "react-icons/fa";
import Header from "./../header/header";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <div className="navbar__logo">
          <a href="index.html">
            <FaCoffee />
          </a>
          <h3>COFFEE RIZZA</h3>
        </div>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <Header />
    </nav>
  );
};

export default Navbar;
