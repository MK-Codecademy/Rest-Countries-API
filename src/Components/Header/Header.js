import React, { useState } from "react";
import "./Header.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <h1 className="headerText">Where in the world?</h1>
      <div className="headerTheme" onClick={handleClick}>
        <div className="themeIcon">{darkMode ? <FaMoon /> : <FaRegMoon />}</div>
        <p className="themeText">Dark Mode</p>
      </div>
    </header>
  );
}
