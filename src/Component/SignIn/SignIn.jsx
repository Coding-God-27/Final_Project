
import React, { useState } from 'react';
import './SignIn.css';

const FormSection = () => {
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleSignUp = () => {
    document.querySelector('.cont').classList.toggle('s--signup');
  };

  const handleSignInSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signInData)
      });

      if (!response.ok) {
        throw new Error('Sign in failed');
      }

      const data = await response.json();
      console.log('Sign in successful', data);
    } catch (error) {
      console.error('Sign in error', error.message);
    }
  };

  const handleSignUpSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpData)
      });

      if (!response.ok) {
        throw new Error('Sign up failed');
      }

      const data = await response.json();
      console.log('Sign up successful', data);
    } catch (error) {
      console.error('Sign up error', error.message);
    }
  };

  return (
    <div>
      <div className="cont">
        <div className="form sign-in">
          <h2>Welcome</h2>
          <label>
            <span>Email</span>
            <input type="email" name="email" value={signInData.email} onChange={handleSignInChange} />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" value={signInData.password} onChange={handleSignInChange} />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button type="button" className="submit" onClick={handleSignInSubmit}>Sign In</button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h3>Don't have an account? Please Sign up!</h3>
            </div>
            <div className="img__text m--in">
              <h3>If you already have an account, just sign in.</h3>
            </div>
            <div className="img__btn" onClick={toggleSignUp}>
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Create your Account</h2>
            <label>
              <span>Name</span>
              <input type="text" name="name" value={signUpData.name} onChange={handleSignUpChange} />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" value={signUpData.email} onChange={handleSignUpChange} />
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password" value={signUpData.password} onChange={handleSignUpChange} />
            </label>
            <button type="button" className="submit" onClick={handleSignUpSubmit}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
