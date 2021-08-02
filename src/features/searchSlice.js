import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {value: ""},
  reducers: {
    updateSearch: (state, search) => {
        state.value = search.payload
    }  
  }
})
  
// Action creators are generated for each case reducer function
export const { updateSearch } = searchSlice.actions

export default searchSlice.reducer