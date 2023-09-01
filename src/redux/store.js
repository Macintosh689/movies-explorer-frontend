import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieReducer";
import userReducer from "./slices/userReducer";
const preloadedState = localStorage.getItem("preloaded") ? JSON.parse(localStorage.getItem("preloaded")) : {};

export const store = configureStore({
   reducer: {
      movie: movieReducer,
      user: userReducer
   },
   preloadedState: preloadedState
})
store.subscribe( () => {localStorage.setItem("preloaded", JSON.stringify(store.getState()))} );