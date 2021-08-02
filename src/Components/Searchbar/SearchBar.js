import React, {useState} from 'react';
import './SearchBar.css';
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { updateSearch } from '../../features/searchSlice';
import removeAccents from "../../features/removeAccents"

export default function SearchBar()    {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    const searchInput = removeAccents(e.target.value)
    setSearch(searchInput);
    dispatch(updateSearch(searchInput))
  }
  
  return (
    <div className="searchBar">
      <div id="searchBox" className="dmElement corners">
        <div id="searchIcon">< FaSearch/></div>
        <input id="searchInput" className="dmElement" name="search-query" type="text" placeholder="Search for a country..." onChange={handleChange} />
      </div>    
    </div>
    )
}