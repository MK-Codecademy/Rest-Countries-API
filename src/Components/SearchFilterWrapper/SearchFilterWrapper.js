import React from "react";
import "./SearchFilterWrapper.css";
import Filter from "../Filter/Filter";
import Sorting from "../Sorting/Sorting";
import SearchBar from "../Searchbar/SearchBar";
import ResetFilters from "../ResetFilters/ResetFilters";


export default function Search_Filter_wrapper(props) {
  return (
    <div className="wrapper">
      <SearchBar />
      <div className="dropDowns">
        <Sorting />
        <Filter />
        <ResetFilters />
      </div>
    </div>
  );
}
