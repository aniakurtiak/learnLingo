import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers } from './operations';

const handlePending = state => {
    state.isLoading = true;
  };
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
    .addCase(fetchTeachers.pending, handlePending)
    .addCase(fetchTeachers.fulfilled, (state, action)=> {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    })
    .addCase(fetchTeachers.rejected, handleRejected)
  }
});


export const teacherReducer = teachersSlice.reducer
