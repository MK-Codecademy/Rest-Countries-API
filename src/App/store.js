import { configureStore } from '@reduxjs/toolkit'
import darkModeSlice from '../features/darkModeSlice'
import testSlice from '../features/testSlice'


export default configureStore({
    reducer: {
       darkMode: darkModeSlice,
       test: testSlice
    }
  })