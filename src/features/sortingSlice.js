import { createSlice } from '@reduxjs/toolkit'

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {value: "alphabetical"},
  reducers: {
    updateSorting: (state, sorting) => {
        state.value = sorting.payload
    }  
  }
})
  
// Action creators are generated for each case reducer function
export const { updateSorting } = sortingSlice.actions

export default sortingSlice.reducer