import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="container">
      <div>
        <h1>Welcome to Note App</h1>
        <p>One safe place for all your notes.</p>
      </div>
      <div className="buttons">
        <div className="login">
          <p>LogIn</p>
        </div>
        <div className="signup">
          <p>SignUp</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
