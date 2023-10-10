import { combineReducers } from '@reduxjs/toolkit'

import { auth } from './slices/authSlice'
import { loader } from './slices/loaderSlice'

import { authApi } from '@/services/authApi/authApi'

export const appReducer = combineReducers({
  auth,
  loader,

  [authApi.reducerPath]: authApi.reducer,
})
