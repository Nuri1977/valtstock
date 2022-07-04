import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Picsum.css';

function Picsum() {
  const picsums = useSelector((state) => state.picsumReducer);
  return (
    <section className="picsum">
      <div className="container border">
        <ul className="pixum-grid">
          {picsums.map((picsum) => (
            <li key={picsum.id} id={picsum.id}>
              <NavLink to={`/${picsum.id}`}>
                <img src={picsum.download_url} alt="" className="picsum-image" />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Picsum;
