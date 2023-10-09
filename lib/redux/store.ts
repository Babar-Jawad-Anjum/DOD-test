import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { authApi } from '../../services/authApi/authApi'
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
    }).concat(authApi.middleware),
})

// export const persistor = persistStore(store)
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
