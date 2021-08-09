import "./ResetFilters.css";

import { useSelector, useDispatch } from 'react-redux'
import { updateFilter } from '../../features/filtersSlice';
import { updateSearch } from '../../features/searchSlice';
import { updateSorting } from '../../features/sortingSlice';
import { getElementError } from "@testing-library/react";


function ResetFilters() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  const handleClick = () => {
    dispatch(updateSearch(""))
    dispatch(updateSorting("alphabetical"))
    for (const country in filters) {
      if (filters[country]) {
        dispatch(updateFilter(country))
      }
    }    
    document.getElementById('searchInput').value = '';
  }

  return (
    <div className="dropDown dropBtn dmElement corners" onClick={handleClick} id="resetBtn">
      <p>Reset</p>
    </div>
  );
}

export default ResetFilters;
