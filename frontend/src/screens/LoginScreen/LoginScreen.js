import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './LoginScreen.css';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from 'react-redux';
import {login} from './../../actions/userActions';
import {Container, TextField, CircularProgress} from '@mui/material';
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

  if (error) {
    toast('Please Enter Correct Password & Email');
  }

  return (
    <Container
      fixed
      style={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: 500,
        width: '90%',
        border: '1px solid rgba(0, 0, 0, .2)',
        padding: '70px 40px',
        marginTop: '100px',
      }}>
      {/* <form> */}
      <ToastContainer />
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
          style={{marginTop: 30}}
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-search"
          label="Password"
          style={{marginTop: 30}}
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
        />

        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <CircularProgress />
          </div>
        ) : (
          <Submit handleSubmit={submitHandler} />
        )}
      </div>
      {/* </form> */}
    </Container>
  );
}
