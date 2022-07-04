import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPixum } from './redux/piscum/picsum';
import Picsum from './components/Picsum';
import PicsumDetail from './components/PicsumDetail';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getPixum()(dispatch);
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Picsum />} />
        <Route path="/:id" element={<PicsumDetail />} />
      </Routes>
    </div>
  );
}

export default App;
