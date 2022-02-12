import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './LoginScreen.css';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginScreen = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      setLoading(true);
      const {data} = await axios.post(
        '/api/users/login',
        {email, password},
        config,
      );
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
      toast('enter correct password and email');
    }
  };

  return (
    <div className="form">
      <ToastContainer />
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <label>Email </label>
          <input
            type="text"
            name="uname"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          {loading ? <p>...loading</p> : <input type="submit" />}
        </div>
      </form>
      <div>
        <p>
          new here ? <Link to="/register">Register Here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
