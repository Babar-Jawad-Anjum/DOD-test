import { createSlice } from '@reduxjs/toolkit'

const initialState: authSliceState = {
  isAuthenticated: false,
  jwt: null,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setJwt: (state, action) => {
      state.jwt = action.payload
    },
    setIsAuthenticated: (state) => {
      state.isAuthenticated = true
    },
    logoutUser: (state) => {
      state.user = null
      state.jwt = null
      state.isAuthenticated = false
    },
  },
})

// export const getIsAuthenticated = (state: RootState) =>
//   state.auth.isAuthenticated

export const { setUser, logoutUser } = authSlice.actions
export const auth = authSlice.reducer

export interface authSliceState {
  isAuthenticated: boolean
  jwt?: string | null
  user: any
}
