import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from '../../api/campersApi';

export const getCampers = createAsyncThunk(
  'campers/getCampers',
  async (params, thunkAPI) => {
    try {
      const data = await fetchCampers(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message || 'Failed to fetch campers'
      );
    }
  }
);

export const getCamperDetails = createAsyncThunk(
  'campers/getCamperDetails',
  async (id, thunkAPI) => {
    try {
      const data = await fetchCamperById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message || 'Failed to fetch camper details'
      );
    }
  }
);
