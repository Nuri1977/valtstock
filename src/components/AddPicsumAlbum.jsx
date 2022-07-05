/* eslint-disable react/jsx-key */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import { albums } from '../api/albums';
import './AddPicsumAlbum.css';

const AddPicsumAlbum = ({ hideCardHandler }) => {
  const [newAlbum, setNewAlbum] = useState(true);
  const togle = () => {
    setNewAlbum(!newAlbum);
  };

  return (
    <Modal hideCardHandler={hideCardHandler}>
      <div className="flex flex-col align-center">
        <div className="flex">
          <button type="button" className={`btn ${!newAlbum && 'active'}`} onClick={togle} disabled={newAlbum}>CREATE NEW ALBUM</button>
          <button type="button" className={`btn ${newAlbum && 'active'}`} onClick={togle} disabled={!newAlbum}>ADD TO EXISTING</button>
        </div>
        <form className={`menu1 flex flex-col align-center ${!newAlbum && 'hidden'}`}>
          <input type="text" className="title" placeholder="Enter album title" />
          <div>
            <button type="button" className="btn-secondary" onClick={hideCardHandler}>CANCEL</button>
            <button type="button" className="btn-primary">SAVE</button>
          </div>
        </form>
        <form className={`menu2 flex flex-col align-center ${newAlbum && 'hidden'}`}>
          {albums.map((album) => (
            <div className="flex justify-center align-center">
              <input
                key="album.id"
                type="checkbox"
                id={album.id}
                name={album.name}
                value={album.name}
                className="checkbox"
              />
              <label htmlFor={album.id}>{album.name}</label>
            </div>
          ))}

          <div>
            <button type="button" className="btn-secondary" onClick={hideCardHandler}>CANCEL</button>
            <button type="button" className="btn-primary">SAVE</button>
          </div>
        </form>
      </div>

    </Modal>
  );
};

AddPicsumAlbum.propTypes = {
  hideCardHandler: PropTypes.func.isRequired,
};

export default AddPicsumAlbum;
