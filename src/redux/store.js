import { configureStore } from "@reduxjs/toolkit";
  import { favrotiesReducer } from "./favorites/favoritesSlice";
import { teacherReducer } from "./teachers/teachersSlice";



export const store = configureStore({
    reducer: {
    // auth: authReducer,
        teachers: teacherReducer,
        favorites: favrotiesReducer,
    },
})