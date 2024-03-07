import { configureStore } from "@reduxjs/toolkit";
  import storage from 'redux-persist/lib/storage';
import { teacherReducer } from "./teachers/teachersSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { authReducer } from "./authUser/authSlice";
import { favrotiesReducer } from "./favorites/favoritesSlice";

// const teacherPersistConfig = {
//     key: 'teachers',
//     storage,
//     whitelist: ['favorites'],
    
//   };
  
//   export const store = configureStore({
//     reducer: persistReducer(teacherPersistConfig, teacherReducer),
//     middleware: (getDefaultMiddleware) => {
//         const customMiddlewares = getDefaultMiddleware({
//           serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//         });
//         return customMiddlewares;
//       },
//   });
  
//   export const persistor = persistStore(store);
  


// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: [],
//   };
  
//   const userIdTransform = (state) => {
//     const userId = state.authUser ? state.authUser.uid : 'anonymous';
//     return { ...state, favorites: state.favorites.map(favorite => ({ ...favorite, userId })) };
//   };
  
//   const rootReducer = (state, action) => {
//     return teacherReducer(userIdTransform(state), action);
//   };
  
//   const store = configureStore({
//     reducer: persistReducer(persistConfig, rootReducer),
//     middleware: (getDefaultMiddleware) => {
//       const customMiddlewares = getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       });
//       return customMiddlewares;
//     },
//   });
  
//   const persistor = persistStore(store);
  
//   export { store, persistor };


export const store = configureStore({
    reducer: {
    // auth: authReducer,
        teachers: teacherReducer,
        favorites: favrotiesReducer,
    },
})