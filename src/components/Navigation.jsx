import React from 'react';
import './Navigation.css';

const Navigation = () => (
  <menu className="navbar">
    <div className="flex justify-between align-center conatiner">
      <div className="text-center equal-length" />
      <div className="text-center equal-length">
        <div className="logo">
          valstock
        </div>

      </div>
      <div className="flex justify-center equal-length">
        <div className="album">My albums</div>
      </div>
    </div>
  </menu>

);

export default Navigation;
