import React, {useEffect, useState} from 'react';
import './Filter.css';
import { BiChevronDown, BiChevronRight, BiCheck } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux'
import { updateFilter } from '../../features/filtersSlice';

export default function Filter(props) {
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  
  // open and close the drop-down
  const handleOpen = () => {
    setOpen(!open);
  }

  // toggle if region filter is selected
  const handleSelect = (e) => {
    const region = e.target.tagName === "P" ? e.target.parentNode.id : e.target.id;
    dispatch(updateFilter(region))
  }

  return (
    <div className="filter">
      <div className="dropBtn dmElement corners" onClick={handleOpen}>
        <p>Filter by Region</p>
        {!open ? <BiChevronRight/> : <BiChevronDown />}
      </div>
      <ul className={`dropList dmElement corners ${open && 'open'}`} id="dropList">
        <li className="dropItem" id="africa" key="africa" onClick={handleSelect}>
          <p>Africa</p>
          {filters.africa ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="americas" key="americas" onClick={handleSelect}>
          <p>Americas</p>
          {filters.americas ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="asia" key="asia"onClick={handleSelect} >
          <p>Asia</p>
          {filters.asia ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="europe" key="europe" onClick={handleSelect} >
          <p>Europe</p>
          {filters.europe ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="oceania" key="oceania" onClick={handleSelect} >
          <p>Oceania</p>
          {filters.oceania ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="polar" key="polar" onClick={handleSelect} >
          <p>Polar</p>
          {filters.polar ? <BiCheck /> : null}
        </li>
      </ul>
    </div>
  )
}