import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"

import { cartSlice } from "./cart-slice"
import { headerSlice } from "./header-slice"

const makeStore = () =>
  configureStore({
    reducer: {
      [cartSlice.name]: cartSlice.reducer,
      [headerSlice.name]: headerSlice.reducer
    },
    devTools: true
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export const wrapper = createWrapper<AppStore>(makeStore)
