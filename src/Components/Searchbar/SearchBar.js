import React, {useState} from 'react';
import './SearchBar.css';
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { updateSearch } from '../../features/searchSlice';

export default function SearchBar()    {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(updateSearch(e.target.value))
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