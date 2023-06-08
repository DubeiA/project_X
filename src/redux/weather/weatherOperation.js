import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeather } from './weatherApi';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (city, thunkAPI) => {
    try {
      const weatherData = await fetchWeather(city);
      return weatherData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
