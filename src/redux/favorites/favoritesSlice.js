import { createSlice } from "@reduxjs/toolkit";
import { addFavorite, deleteFavorite } from "./operations";

const initialState = {
  items: [],
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

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addFavorite.rejected, handleRejected)
      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== (action.payload?.teacherId));
      })
      .addCase(deleteFavorite.rejected, handleRejected);
  },
});

export const favrotiesReducer = favoritesSlice.reducer;
export const { setFavorites } = favoritesSlice.actions;