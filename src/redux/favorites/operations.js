import { createAsyncThunk } from '@reduxjs/toolkit';
// import { dbRef } from "firebase";
import { get, getDatabase, onValue, ref, set } from 'firebase/database';
import { setFavorites } from './favoritesSlice.js';

const db = getDatabase();

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async ({ userId, teacher }) => {
    try {
      const userFavoritesRef = ref(db, `users/${userId}/favorites`);
      const existingFavorites = (await get(userFavoritesRef)).val() || {};

      // Додайте новий вчитель до існуючих улюблених вчителів
      const updatedFavorites = {
        ...existingFavorites,
        [teacher.id]: teacher,
      };

      await set(userFavoritesRef, updatedFavorites);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (userId, { dispatch }) => {
    try {
      const userFavoritesRef = ref(db, `users/${userId}/favorites`);

      onValue(userFavoritesRef, (snapshot) => {
        if (snapshot.exists()) {
          const favoritesData = snapshot.val();
          const favoritesArray = Object.values(favoritesData);
          dispatch(setFavorites(favoritesArray)); // Додайте екшен для встановлення даних у ваш Redux store
        } else {
          console.log('No data available');
          dispatch(setFavorites([])); // Оновіть стан у випадку відсутності даних
        }
      });
    } catch (error) {
      console.error('Error fetching favorites:', error);
      throw error;
    }
  }
);


export const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async ({ userId, teacherId }) => {
    try {
      const userFavoritesRef = ref(db, `users/${userId}/favorites`);
      const existingFavorites = (await get(userFavoritesRef)).val() || {};

      // Видаліть вчителя з улюблених
      delete existingFavorites[teacherId];

      await set(userFavoritesRef, existingFavorites);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);


// export const addFavorite = createAsyncThunk(
//   'favorites/addFavorite',
//   async ({ userId, teacher }, thunkAPI) => {
//     try {
//       const userFavoritesRef = ref(db, `users/${userId}/favorites`);
//       await set(userFavoritesRef, {
//         [teacher.id]: teacher,
//       });
//       return teacher; // Returning the added teacher
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
// );

// export const deleteFavorite = createAsyncThunk(
//   'favorites/deleteFavorite',
//   async ({ userId, teacherId }, thunkAPI) => {
//     try {
//       const userFavoritesRef = ref(db, `users/${userId}/favorites`);
//       await set(userFavoritesRef.child(teacherId), null);
//       return teacherId; // Returning the deleted teacherId
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
// );