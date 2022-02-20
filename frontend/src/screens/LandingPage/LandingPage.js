import React from 'react';
import './LandingPage.css';
import {Link, withRouter} from 'react-router-dom';

const LandingPage = ({history}) => {
  return (
    <div className="container">
      <div>
        <h1>Welcome to Note App</h1>
        <p>One safe place for all your notes.</p>
      </div>
      <div className="buttons">
        <Link to="/login">
          <div className="login">
            <p>LogIn</p>
          </div>
        </Link>
        <Link to="/register">
          <div className="signup">
            <p>SignUp</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
