import React from 'react';
import { useSelector } from 'react-redux';

function Picsum() {
  const picsums = useSelector((state) => state.picsumReducer);
  console.log(picsums);
  return (
    <div>Picsum</div>
  );
}

export default Picsum;
