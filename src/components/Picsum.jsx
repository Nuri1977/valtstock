import React from 'react';
import { useSelector } from 'react-redux';
import './Picsum.css';

function Picsum() {
  const picsums = useSelector((state) => state.picsumReducer);
  console.log(picsums);
  return (
    <section className="picsum">
      <div className="container border">
        <ul className="pixum-grid">
          {picsums.map((picsum) => (
            <li key={picsum.id} id={picsum.id}>
              <img src={picsum.download_url} alt="" className="picsum-image" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Picsum;
