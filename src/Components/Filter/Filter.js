import React, {useState} from 'react';
import './Filter.css';
import { BiChevronDown, BiChevronRight, BiCheck } from "react-icons/bi";

export default function Filter(props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({ africa: false, america: false, asia: false, europe: false, oceania: false })
  
  // open and close the drop-down
  const handleOpen = () => {
    setOpen(!open);
  }

  // toggle if region filter is selected
  const handleSelect = (e) => {
    const selectedCopy = { ...selected };
    const region = e.target.id;
    selectedCopy[region] = !selected[region];
    setSelected(selectedCopy)
  }

  return (
    <div className="filter">
      <div className="dropBtn" onClick={handleOpen}>
        <p>Filter by Region</p>
        {!open ? <BiChevronRight/> : <BiChevronDown />}
      </div>
      <ul className={`dropList ${open && 'open'}`} id="dropList">
        <li className="dropItem" id="africa" key="africa" onClick={handleSelect}>
          <p>Africa</p>
          {selected.africa ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="america" key="america" onClick={handleSelect}>
          <p>America</p>
          {selected.america ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="asia" key="asia" onClick={handleSelect}>
          <p>Asia</p>
          {selected.asia ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="europe" key="europe" onClick={handleSelect}>
          <p>Europe</p>
          {selected.europe ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="oceania" key="oceania" onClick={handleSelect}>
          <p>Oceania</p>
          {selected.oceania ? <BiCheck /> : null}
        </li>
      </ul>
    </div>
  )
}