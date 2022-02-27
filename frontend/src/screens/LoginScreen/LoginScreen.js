import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './LoginScreen.css';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from 'react-redux';
import {login} from './../../actions/userActions';
import {Container, TextField} from '@mui/material';
import {Submit} from '../../components/Buttons/Submit';

export default function LoginScreen({history}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {loading, userInfo, error} = useSelector((state) => state).userLogin;

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/notes');
    }
  }, [history, userInfo]);

  return (
    // <div className="form">
    //   <ToastContainer />
    //   <form onSubmit={submitHandler}>
    //     <div className="input-container">
    //       <label>Email </label>
    //       <input
    //         type="text"
    //         name="uname"
    //         required
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="input-container">
    //       <label>Password </label>
    //       <input
    //         type="password"
    //         name="pass"
    //         required
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <div className="button-container">
    //       {loading ? <p>...loading</p> : <input type="submit" />}
    //     </div>
    //   </form>
    //   <div>
    //     <p>
    //       new here ? <Link to="/register">Register Here</Link>
    //     </p>
    //   </div>
    // </div>
    <Container
      fixed
      style={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: 500,
        width: '90%',
        border: '1px solid grey',
        padding: '20px',
      }}>
      {/* <form> */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 500,
          width: '100%',
          justifyContent: 'center',
        }}>
        <TextField
          id="standard-search"
          label="Email"
          // type="search"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-search"
          label="Password"
          // type="search"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <Submit handleSubmit={submitHandler} /> */}
        <p onClick={submitHandler}>hello</p>
      </div>
      {/* </form> */}
    </Container>
  );
}
