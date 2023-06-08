import { createSlice } from '@reduxjs/toolkit';
import { fetchWeatherData } from './weatherOperation';

const contactsReducer = createSlice({
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
    // Fecth Contact
    [fetchWeatherData.pending]: state => {
      state.weather.isLoading = true;
    },
    [fetchWeatherData.fulfilled]: (state, { payload }) => {
      state.weather.location = payload.location;
      state.weather.current = payload.current;
      state.weather.isLoading = false;
    },
    [fetchWeatherData.rejected]: (state, { payload }) => {
      state.weather.isLoading = false;
      state.weather.error = payload;
    },
    // // Add Contact
    // [addContact.pending]: state => {
    //   state.contacts.isLoading = true;
    // },
    // [addContact.fulfilled]: (state, { payload }) => {
    //   state.contacts.entities.push(payload);
    //   state.contacts.isLoading = false;
    // },
    // [addContact.rejected]: (state, { payload }) => {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = payload;
    // },
    // // delete contact
    // [deleteContact.pending]: state => {
    //   state.contacts.isLoading = true;
    // },
    // [deleteContact.fulfilled]: (state, { payload }) => {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   const index = state.contacts.entities.findIndex(
    //     contactID => contactID.id === payload.id
    //   );
    //   state.contacts.entities.splice(index, 1);
    // },
    // [deleteContact.rejected]: (state, { payload }) => {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = payload;
    // },
  },
});

export const { SearchByName } = contactsReducer.actions;

export default contactsReducer.reducer;
