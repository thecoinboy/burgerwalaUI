import { configureStore } from '@reduxjs/toolkit'
import {loadUserReducer} from './reducer/userReducer.js'

export const store = configureStore({
  reducer:{
    auth:loadUserReducer,  
  }
})

