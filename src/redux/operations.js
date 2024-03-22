import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65f5b49d41d90c1c5e0a02ce.mockapi.io/api/V1/';

// 'fetchContacts' using createAsyncThunk//
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  // Callback asincron //
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      console.log('Datele din API:', response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Asincron action addContact //
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Asincron Action deleteContact //
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
