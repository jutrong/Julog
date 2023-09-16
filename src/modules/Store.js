import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./RootSlice"

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export default store
