import './SearchBar.css';
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { updateSearch } from '../../features/searchSlice';
import removeAccents from "../../features/removeAccents"

import debounce from 'lodash.debounce';

export default function SearchBar()    {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const searchInput = removeAccents(e.target.value)
    dispatch(updateSearch(searchInput.toLowerCase()))
  }
  
  // delay updating state if user still typing (half second delay)
  const debounceChange = debounce(handleChange, 500)

  return (
    <div className="searchBar">
      <div id="searchBox" className="dmElement corners">
        <div id="searchIcon">< FaSearch/></div>
        <input 
          id="searchInput" 
          className="dmElement corners" 
          name="search-query" 
          type="text" 
          placeholder="Search for a country..." 
          onChange={debounceChange} />
      </div>    
    </div>
    )
}