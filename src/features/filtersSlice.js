import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        africa: false,
        america: false,
        asia: false,
        europe: false,
        oceania: false

    },
    reducers: {
        updateFilter: (state, filter) => {
            state[filter.payload] = !state[filter.payload]
        }
      
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { updateFilter } = filterSlice.actions
  
  export default filterSlice.reducer