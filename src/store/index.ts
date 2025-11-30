import { configureStore } from "@reduxjs/toolkit"
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import categoriesReducer from "./slices/categoriesSlice"
import servicesReducer from "./slices/servicesSlice"
import accountsReducer from "./slices/accountsSlice"
import uiReducer from "./slices/uiSlice"
import vaultApi from "./api/vaultApi"

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    services: servicesReducer,
    accounts: accountsReducer,
    ui: uiReducer,
    [vaultApi.reducerPath]: vaultApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(vaultApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
