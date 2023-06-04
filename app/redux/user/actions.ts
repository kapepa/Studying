import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk('user/get', async () => {
  const response = await axios.get('https://api.kanye.rest/');
  return response.data;
});