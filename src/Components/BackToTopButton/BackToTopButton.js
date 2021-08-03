import styles from "./BackToTopButton.css";
import { FaArrowCircleUp } from "react-icons/fa";
import { useState, useEffect } from "react";

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 150 ? setShowButton(true) : setShowButton(false);
    });
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <FaArrowCircleUp
        onClick={handleClick}
        className={showButton ? "backToTopButton" : "hidden"}
      />
    </>
  );
}

export default BackToTopButton;
