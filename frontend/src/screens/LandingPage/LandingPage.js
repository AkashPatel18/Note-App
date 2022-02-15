import React from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const LandingPage = ({history}) => {
  console.warn(history);
  const his = useHistory();
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
        <div className="signup">
          <p>SignUp</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
