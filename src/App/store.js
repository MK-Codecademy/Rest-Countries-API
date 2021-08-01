import { configureStore } from '@reduxjs/toolkit'
import darkModeSlice from '../features/darkModeSlice'


export default configureStore({
    reducer: {
       darkMode: darkModeSlice
    }
  })