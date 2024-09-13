import { configureStore }  from "@reduxjs/toolkit"
import newsReducer from "../Features/HomeSlice"

let store = configureStore({
    reducer: newsReducer
})

export default store;