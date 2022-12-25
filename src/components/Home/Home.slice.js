import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from 'utils/axiosClient';

export const getPublicIp = createAsyncThunk(
  'get-public-ip',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosClient({ url: 'https://api.ipify.org/?format=json', method: 'get' });
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const loginSlice = createSlice({
  name: 'home',
  initialState: {
    isFetching: false,
    error: null,
    data: {},
  },
  reducers: {
    // all scynchronous reducers goes here
  },
  extraReducers: {
    [getPublicIp.pending]: (state) => {
      state.isFetching = true;
    },
    [getPublicIp.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.data = payload;
    },
    [getPublicIp.rejected]: (state, { payload, error }) => {
      state.isFetching = false;
      state.error = payload?.message || error?.message;
    },
  },
});

export default loginSlice.reducer;
