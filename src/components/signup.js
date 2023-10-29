import React, { useState } from 'react';
import './styles/Signup.css'
import sdim from "./images/i3.png"
import clogo from "./images/clogo.png"


const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const back = process.env.REACT_APP_URL;

  const url = back + "/users/signup";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {


    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };



    const func = async () => {

      const response = await fetch(url, requestOptions);
      console.log(response);
    }

    func();

  };

  return (
    <>
      <div className='mb'  >
        <div className='credIp'>
          <h2 className='signhd'>Registration form</h2>
          <div className='logo'>
            <img id='clogo' src={clogo} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className='username'>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className='email'>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='pass'>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className='sbtn'>
              <button id='sbt' type="submit">Sign Up</button>
            </div>
            <div className='al'>
              <a href='/signin' id='al'>
                Already have an account?
              </a>
            </div>
          </form>
        </div>
        <div className='sdpc'>
          <img id='sdpc' src={sdim} alt='#' />
        </div>

      </div>

    </>);
};

export default SignUpForm;