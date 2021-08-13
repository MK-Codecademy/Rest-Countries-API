import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { toggleDarkMode } from "../../features/darkModeSlice";

import { useDispatch } from 'react-redux'
import { changeTest } from "../../features/testSlice";

import { useSelector, useDispatch } from 'react-redux'


export default function Header() {
  const dispatch = useDispatch()
  const [darkMode, setDarkMode] = useState(true);
  

  const handleClick = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode())
  };

  return (
    <header className="header">
      <h1 className="headerText"><Link to="/Rest-Countries-API/">Where in the world?</Link></h1>
      <div className="headerTheme" onClick={handleClick}>
        <div className="themeIcon">{darkMode ? <FaMoon /> : <FaRegMoon />}</div>
        <p className="themeText">Dark Mode</p>
      </div>
    </header>
  );
}
