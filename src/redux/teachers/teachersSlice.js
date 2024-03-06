import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers } from './operations';

const initialState = {
  items: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    addFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFavorites(state, action) {
      state.favorites = state.favorites.filter(
        teacher => teacher.id !== action.payload.id
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, handlePending)
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTeachers.rejected, handleRejected);
  },
});

export const { addFavorites, deleteFavorites } = teachersSlice.actions;

export const teacherReducer = teachersSlice.reducer;
