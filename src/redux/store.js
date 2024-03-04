import { configureStore } from "@reduxjs/toolkit";
import { teacherReducer } from "./teachers/teachersSlice";

export const store = configureStore({
    reducer: {
        teachers: teacherReducer,
    },
})