import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPixum } from './redux/piscum/picsum';
import Picsum from './components/Picsum';
import PicsumDetail from './components/PicsumDetail';
import Navigation from './components/Navigation';
import './App.css';
import Login from './components/Login';
import AddPicsumAlbum from './components/AddPicsumAlbum';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [picsumId, setPicsumId] = useState('');
  const showCardHandler = (picsum) => {
    setShowModal(true);
    setPicsumId(picsum);
  };
  const hideCardHandler = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getPixum()(dispatch);
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Picsum />} />
        <Route path="/home/:id" element={<PicsumDetail showCardHandler={showCardHandler} />} />
        <Route path="/" element={<Login />} />
      </Routes>
      {showModal
      && (
      <AddPicsumAlbum
        hideCardHandler={hideCardHandler}
        id={picsumId}
      />
      )}
    </div>
  );
}

export default App;
