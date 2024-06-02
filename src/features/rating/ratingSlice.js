import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  rating: ''
}
export const ratingSlice = createSlice({
  name: 'rating',
initialState, 
reducers: {
  addRating(state, action) {
    state.rating = action.payload
  }
}
})

export const {addRating} = ratingSlice.actions

export default ratingSlice.reducer