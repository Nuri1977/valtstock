import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Picsum.css';

function Picsum({ showCardHandler }) {
  const picsums = useSelector((state) => state.picsumReducer);
  return (
    <section className="picsum">
      <div className="container">
        <ul className="pixum-grid">
          {picsums.map((picsum) => (
            <li key={picsum.id} id={picsum.id}>
              <NavLink to={`/home/${picsum.id}`}>
                <div className="image-container" id="image-container">
                  <img src={picsum.download_url} alt="" className="picsum-image" />
                  <button type="button" className="add-album hidden" onClick={() => showCardHandler(picsum)}>Add to Album</button>
                </div>
              </NavLink>

            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Picsum.propTypes = {
  showCardHandler: PropTypes.func.isRequired,
};

export default Picsum;
