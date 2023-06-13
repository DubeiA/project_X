import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask } from './operationTasks';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    // Fecth Tasks
    [fetchTasks.pending]: state => {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchTasks.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // Add tasks

    [addTask.pending]: state => {
      state.isLoading = true;
    },
    [addTask.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
    },
    [addTask.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
