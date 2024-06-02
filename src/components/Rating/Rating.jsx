import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRating } from "../../features/rating/ratingSlice";

export default function Rating({ display }) {
  const ratingValue = useSelector((state) => state.rating.rating);
  const dispatch = useDispatch();

  console.log(ratingValue);

  function handleRating(e) {
    const newRating = parseInt(e.target.value, 10);
    dispatch(addRating(newRating));
  }

  return (
    <div className="rating">
      {Array.from({ length: 9 }, (_, i) => (
        <input
          key={i}
          type="radio"
          name="rating-1"
          className={`mask mask-star ${display} ${i < ratingValue ? "bg-orange-400" : "bg-gray-400"}`}
          value={i + 1}
          onChange={handleRating}
        />
      ))}
    </div>
  );
}
