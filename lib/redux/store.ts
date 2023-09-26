import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux'

import { middleware } from './middleware'
import { appReducer } from './reducers'

// const persistConfig = {
//   key: `root`,
//   whitelist: [`authSlice`, `countriesSlice`, `paymentMethodSlice`], //only these will be persisted
//   // storage,
// }

// const persistedReducer = persistReducer(persistConfig, combinedReducer)
/**
 * Creates a store and includes all the slices as reducers.
 */
export const store = configureStore({
  // reducer: persistedReducer,
  reducer: appReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
})

// export const persistor = persistStore(store)
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: { users: UsersState}
type AppDispatch = typeof store.dispatch

// Since we use typescript, lets utilize `useDispatch`
export const useDispatch = () => useDispatchBase<AppDispatch>()

// And utilize `useSelector`
export const useSelector = <TSelected = unknown>(
  selector: () => TSelected,
): TSelected => useSelectorBase<RootState, TSelected>(selector)
