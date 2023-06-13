import { createSlice } from '@reduxjs/toolkit';
import { fetchWeatherData } from './weatherOperation';

const weatherReducer = createSlice({
  name: 'weather',
  initialState: {
    weather: {
      location: [],
      current: [],
      isLoading: false,
      error: null,
    },
    city: [],
  },
  reducers: {
    SearchByName: (state, action) => {
      state.city.push(action.payload);
    },
  },
  extraReducers: {
    // Fecth Weather
    [fetchWeatherData.pending]: state => {
      state.weather.isLoading = true;
    },
    [fetchWeatherData.fulfilled]: (state, { payload }) => {
      state.weather.location.push(payload.location);
      state.weather.current.push(payload.current);
      state.weather.isLoading = false;
    },
    [fetchWeatherData.rejected]: (state, { payload }) => {
      state.weather.isLoading = false;
      state.weather.error = payload;
    },
  },
});

export const { SearchByName } = weatherReducer.actions;

export default weatherReducer.reducer;
