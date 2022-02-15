import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './LoginScreen.css';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from 'react-redux';
import {login} from './../../actions/userActions';

export default function LoginScreen({history}) {
  console.warn(history);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state).userLogin;

  const {loading, userInfo, error} = userLogin;

  console.warn(loading, 'loading');

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      console.warn(history, 'jdlaj');
      // history.push('/register');
    }
  }, [history, userInfo]);

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
}
