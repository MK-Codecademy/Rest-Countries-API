import React from 'react';
import './SearchBar.css';
import { FaSearch } from "react-icons/fa";

export default function SearchBar(props)    {
    return  (
        <div className="searchBar">
            <div id="searchBox" className="dmElement corners">
                <div id="searchIcon">< FaSearch/></div>
                <input id="searchInput" className="dmElement" name="search-query" type="text" placeholder="Search for a country..."/>
            </div>    
        </div>
    )
}