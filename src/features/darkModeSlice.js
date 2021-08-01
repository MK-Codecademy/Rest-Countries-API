import { createSlice } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
      value: true
    },
    reducers: {
      toggleDarkMode: (state) => {
          state.value = !state.value
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { toggleDarkMode } = darkModeSlice.actions
  
  export default darkModeSlice.reducer