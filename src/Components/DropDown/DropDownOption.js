import { BiCheck } from "react-icons/bi";
import { useDispatch } from 'react-redux'

export default function Filter({option}) {
  const dispatch = useDispatch();

  // toggle if region filter is selected
  const handleSelect = (e) => {
    const toggle = e.target.tagName === "P" ? e.target.parentNode.id : e.target.id;
    dispatch(option.updateState(toggle))
  }

  return (
    <li className="dropItem" id={option.id} onClick={handleSelect}>
      <p>{option.name}</p>
      {option.check ? <BiCheck /> : null}
    </li>
  )
}