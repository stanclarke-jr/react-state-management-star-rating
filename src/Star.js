/* eslint-disable react/prop-types */
import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Star({ selected = false, onSelect = (func) => func }) {
  return <FaStar color={selected ? 'yellow' : 'grey'} onClick={onSelect} />;
}
