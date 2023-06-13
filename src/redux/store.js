import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather/weatherReducer';
import { tasksReducer } from './tasks/tasksReducer';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    tasks: tasksReducer,
  },
});
