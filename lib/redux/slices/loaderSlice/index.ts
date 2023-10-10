import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../..'

const initialState: LoaderSliceState = {
  isLoading: false,
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    enableLoading: (state) => {
      state.isLoading = true
    },
    disableLoading: (state) => {
      state.isLoading = false
    },
  },
})

export const { enableLoading, disableLoading } = loaderSlice.actions
export const loader = loaderSlice.reducer

export const getLoadingState = (state: RootState) => state.loader.isLoading

export interface LoaderSliceState {
  isLoading: boolean
}
