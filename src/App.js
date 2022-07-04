import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPixum } from './redux/piscum/picsum';
import Picsum from './components/Picsum';
import PicsumDetail from './components/PicsumDetail';
import Navigation from './components/Navigation';
import './App.css';
import Login from './components/Login';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getPixum()(dispatch);
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Picsum />} />
        <Route path="/:id" element={<PicsumDetail />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
