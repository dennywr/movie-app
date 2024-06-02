import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movie: {},
  isLoading: false,
  isError: false,
};

// Create an async thunk for fetching movie details
export const fetchMovieById = createAsyncThunk(
  'movie/fetchMovieById',
  async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=efa19839be433f24324740ff607f44d1`
    );
    return response.data;
  }
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default movieSlice.reducer;
