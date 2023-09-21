/* Core */
import { createSlice, Draft, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */

const initialState: CounterSliceState = {
  value: 0,
  status: 'idle',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },

})



export interface UserState {
  nonceId: string
}

/**
 * Default state object with initial values.
 */

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
// export const userSlice = createSlice({
//   name: `user`,
//   initialState,
//   reducers: {
//     setAuthCode: (
//       state: Draft<typeof initialState>,
//       action: PayloadAction<typeof initialState.nonceId>,
//     ) => {
//       state.nonceId = action.payload
//     },
//   },
// })

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: UserState }) => state.user

// Exports all actions
export const { increment, incrementByAmount } = counterSlice.actions

export const counter = counterSlice.reducer

/* Types */
export interface CounterSliceState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}
