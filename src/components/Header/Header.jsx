import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Recipe App</h1>
      <div className="nav-box">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#wanttocook" className="nav-link">
          WantToCook
        </a>
        <a href="#dishes" className="nav-link">
          Dishes
        </a>
      </div>
    </header>
  );
};

export default Header;
