/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Star from './Star';

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((num, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          onSelect={() => setSelectedStars(index + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
