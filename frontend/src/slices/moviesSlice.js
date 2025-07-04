import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Import your movies data
import { movies as moviesData } from '../constants/movies';

// Simulate an API call
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return moviesData;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;