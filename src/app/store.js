import { configureStore } from '@reduxjs/toolkit'
import ratingRaducer from '../features/rating/ratingSlice'
import movieReducer from '../features/movie/movieSlice'

export default configureStore({
  reducer: {
    rating: ratingRaducer,
    movie: movieReducer
  }
})