import "./SearchFilterWrapper.css";
import SearchBar from "../Searchbar/SearchBar";
import ResetFilters from "../ResetFilters/ResetFilters";
import { useSelector} from 'react-redux'
import { updateSorting } from '../../features/sortingSlice';
import { updateFilter } from '../../features/filtersSlice';
import DropDown from '../DropDown/DropDown';


export default function Search_Filter_wrapper(props) {
  const filters = useSelector(state => state.filters);
  const sorting = useSelector(state => state.sorting);

  // function to create option object for DropDownOption component
  const createOption = (name, updateState, check) => {
    const nameCapt = name[0].toUpperCase() + name.slice(1);
    return {
      id: name,
      key: name,
      name: nameCapt,
      updateState: updateState,
      check: check
    }
  }

  // create filter options to pass into drop down
  const filterNames = ['africa', 'americas', 'asia', 'europe', 'oceania', 'polar'];
  const filterOptions = [];
  filterNames.forEach(option => filterOptions.push(createOption(option, updateFilter, filters[option])));
  
  // create sorting options to pass into drop down
  const sortingNames = ['alphabetical', 'population', 'area'];
  const sortingOptions = [];
  sortingNames.forEach(option => sortingOptions.push(createOption(option, updateSorting, sorting.value === option)));

  return (
    <div className="wrapper">
      <SearchBar />
      <div className="dropDowns">
        <DropDown title="Sort by" options={sortingOptions} />
        <DropDown title="Filter by Region" options={filterOptions} />
        <ResetFilters />
      </div>
    </div>
  );
}
