import React, { useState } from "react";
import "./Header.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { toggleDarkMode } from "../../features/darkModeSlice";
import { useSelector, useDispatch } from 'react-redux'
import { changeTest } from "../../features/testSlice";

export default function Header() {
  const dispatch = useDispatch()
  const [darkMode, setDarkMode] = useState(true);
  

  const handleClick = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode())
    dispatch(changeTest('Testing'))
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
