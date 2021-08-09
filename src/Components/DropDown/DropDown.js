import {useState} from 'react';
import './DropDown.css';
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import DropDownOption from './DropDownOption'

export default function DropDown({title, options}) {
  const [open, setOpen] = useState(false);
  
  // open and close the drop-down
  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <div className="dropDown">
      <div className="dropBtn dmElement corners" onClick={handleOpen}>
        <p>{title}</p>
        {!open ? <BiChevronRight/> : <BiChevronDown />}
      </div>
      <ul className={`dropList dmElement corners ${open && 'open'}`} id="dropList">
        {options.map(option => <DropDownOption option={option} key={option.key} />)}
      </ul>
    </div>
  )
}

