import { combineReducers } from '@reduxjs/toolkit'

import { authApi } from '@/services/authApi/authApi'
import { auth } from './slices/authSlice'
import { counter } from './slices/counterSlice'

export const appReducer = combineReducers({
  counter,
  auth,

  [authApi.reducerPath]: authApi.reducer,
})
