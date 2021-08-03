import React, {useEffect, useState} from 'react';
import './Sorting.css';
import { BiChevronDown, BiChevronRight, BiCheck } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux';
import { updateSorting } from '../../features/sortingSlice';


export default function Sorting(props) {

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [sorting, setSorting] = useState('alphabetical')
  
  // open and close the drop-down
  const handleOpen = () => {
    setOpen(!open);
  }

  // toggle if region filter is selected
  const handleSelect = (e) => {
    const sorting = e.target.tagName === "P" ? e.target.parentNode.id : e.target.id;
    setSorting(sorting)
    dispatch(updateSorting(sorting))
  }

  return (
    <div className="filter sorting">
      <div className="dropBtn dmElement corners" onClick={handleOpen}>
        <p>Sort by</p>
        {!open ? <BiChevronRight/> : <BiChevronDown />}
      </div>
      <ul className={`dropList dmElement corners ${open && 'open'}`} id="dropList">
        <li className="dropItem" id="alphabetical" key=" alphabetical" onClick={handleSelect}>
          <p>Albabetical</p>
          {sorting === 'alphabetical' ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="population" key="population" onClick={handleSelect}>
          <p>Population</p>
          {sorting === 'population' ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="area" key="area" onClick={handleSelect} >
          <p>Area</p>
          {sorting === 'area' ? <BiCheck /> : null}
        </li>
      </ul>
    </div>
  )
}