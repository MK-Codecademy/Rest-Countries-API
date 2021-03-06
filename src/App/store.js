import { configureStore } from '@reduxjs/toolkit'
import darkModeSlice from '../features/darkModeSlice'
import testSlice from '../features/testSlice'
import filterSlice from '../features/filtersSlice'
import searchSlice from '../features/searchSlice'
import sortingSlice from '../features/sortingSlice'


export default configureStore({
  reducer: {
    darkMode: darkModeSlice,
    test: testSlice,
    filters: filterSlice,
    search: searchSlice,
    sorting: sortingSlice,    
    }
  })