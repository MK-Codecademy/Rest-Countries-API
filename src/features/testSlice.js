import { createSlice } from '@reduxjs/toolkit'

export const testSlice = createSlice({
    name: 'test',
    initialState: {
      value: "Test"
    },
    reducers: {
        changeTest: (state, newValue) => {
            state.value = newValue.payload
        }
      
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { changeTest } = testSlice.actions
  
  export default testSlice.reducer