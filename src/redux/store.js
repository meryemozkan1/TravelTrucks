import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/campersSlice';
import { favoritesReducer } from './favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
  },
});
