import React from "react";
import "./SearchFilterWrapper.css";
import Filter from "../Filter/Filter";
import SearchBar from "../Searchbar/SearchBar";

export default function Search_Filter_wrapper(props) {
  return (
    <div className="wrapper">
      <SearchBar />
      <Filter />
    </div>
  );
}
