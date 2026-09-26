import { createSlice } from '@reduxjs/toolkit';

const FAVORITES_KEY = 'travel_trucks_favorites';

const getInitialFavorites = () => {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to parse favorites from localStorage:', error);
    return [];
  }
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: getInitialFavorites(),
  },
  reducers: {
    toggleFavorite(state, action) {
      const camper = action.payload;
      const index = state.items.findIndex((item) => item.id === camper.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(camper);
      }
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.items));
      } catch (error) {
        console.error('Failed to save favorites to localStorage:', error);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
