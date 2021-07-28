import React from 'react';
import './SearchFilterWrapper.css'

import Filter from '../Filter/Filter';
import SearchBar from '../Searchbar/SearchBar';

export default function Search_Filter_wrapper(props)    {
    return(
        <div className="wrapper border">
            <p>I would like to wrap the Search and Filter please</p>
            <SearchBar />
            <Filter />
        </div>
    )
}