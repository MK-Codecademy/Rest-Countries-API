import React, {useEffect, useState} from 'react';
import './Filter.css';
import { BiChevronDown, BiChevronRight, BiCheck } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux'
import { updateFilter } from '../../features/filtersSlice';

export default function Filter(props) {

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({ africa: false, america: false, asia: false, europe: false, oceania: false })
  const filters = useSelector(state => state.filters)
  
  useEffect(() => {
    console.log(filters)
  },[filters])
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
    dispatch(updateFilter(e.target.id))
  }

  return (
    <div className="filter">
      <div className="dropBtn dmElement corners" onClick={handleOpen}>
        <p>Filter by Region</p>
        {!open ? <BiChevronRight/> : <BiChevronDown />}
      </div>
      <ul className={`dropList dmElement corners ${open && 'open'}`} id="dropList">
        <li className="dropItem" id="africa" key="africa" onClick={handleSelect}>
          <p id="africa" >Africa</p>
          {selected.africa ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="america" key="america" onClick={handleSelect}>
          <p id="america" >America</p>
          {selected.america ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="asia" key="asia"onClick={handleSelect} >
          <p id="asia" >Asia</p>
          {selected.asia ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="europe" key="europe" onClick={handleSelect} >
          <p id="europe" >Europe</p>
          {selected.europe ? <BiCheck /> : null}
        </li>
        <li className="dropItem" id="oceania" key="oceania" onClick={handleSelect} >
          <p id="oceania" >Oceania</p>
          {selected.oceania ? <BiCheck /> : null}
        </li>
      </ul>
    </div>
  )
}