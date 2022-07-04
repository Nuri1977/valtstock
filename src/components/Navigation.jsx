import React from 'react';
import './Navigation.css';

const Navigation = () => (
  <div className=" navbar flex justify-between align-center">
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
);

export default Navigation;
