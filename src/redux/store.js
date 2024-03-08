import { configureStore } from "@reduxjs/toolkit";
  import { favrotiesReducer } from "./favorites/favoritesSlice";
import { teacherReducer } from "./teachers/teachersSlice";



export const store = configureStore({
    reducer: {
        teachers: teacherReducer,
        favorites: favrotiesReducer,
    },
})