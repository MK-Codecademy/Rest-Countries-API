import styles from "./BackButton.css";
import { BsArrowLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom";

function BackButton() {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/Rest-Countries-API/");
  };

  return (
    <div className="container">
      <button className="button" onClick={handleRoute}>
        <BsArrowLeft className="btnArrow" />
        Back
      </button>
    </div>
  );
}

export default BackButton;
