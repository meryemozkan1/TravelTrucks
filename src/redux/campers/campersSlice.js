import { createSlice } from '@reduxjs/toolkit';
import { getCampers, getCamperDetails } from './operations';

const initialState = {
  items: [],
  total: 0,
  page: 1,
  isLoading: false,
  error: null,
  filters: {
    location: '',
    form: '',
    features: [],
  },
  currentCamper: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filters = { ...state.filters, ...action.payload };
      state.page = 1;
      state.items = [];
    },
    resetCampers(state) {
      state.items = [];
      state.page = 1;
      state.total = 0;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const requestedPage = action.meta.arg?.page || 1;
        state.page = requestedPage;
        state.total = action.payload.total ?? 0;
        const fetchedItems = action.payload.items || [];
        if (requestedPage === 1) {
          state.items = fetchedItems;
        } else {
          state.items = [...state.items, ...fetchedItems];
        }
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCamperDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.currentCamper = null;
      })
      .addCase(getCamperDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCamper = action.payload;
      })
      .addCase(getCamperDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { changeFilter, resetCampers, setPage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
