import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const AddPicsumAlbum = ({ hideCardHandler }) => {
  const nuri = 1;
  console.log(nuri);

  return (
    <Modal
      hideCardHandler={hideCardHandler}
    >
      <button type="button" onClick={hideCardHandler}>AddPicsumAlbum</button>
    </Modal>
  );
};

AddPicsumAlbum.propTypes = {
  hideCardHandler: PropTypes.func.isRequired,
};

export default AddPicsumAlbum;
