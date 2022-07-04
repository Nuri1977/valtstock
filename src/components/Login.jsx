/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import img from '../assets/images/test2.png';

const Login = () => {
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <div className="login flex flex-col">
      <div className="form-div container flex flex-col align-center">
        <div className="header">Join our stock comunity!</div>
        <div className="description">Download free photos and videos powered by the best photografers.</div>

        <form className="login-form flex flex-col align-center text-center">
          <label htmlFor="email">USERNAME</label>
          <input type="text" id="email" placeholder="Enter username here..." />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" placeholder="Enter password here..." />
          <button type="button" className="btn-primary" onClick={(event) => submitHandler(event)}>
            Login
          </button>
        </form>
      </div>
      <div className="image-div">
        <div className="div-1" />
        <div className="div-2" />
        <img src={img} alt="" className="login-image" />
      </div>
    </div>
  );
};

export default Login;
