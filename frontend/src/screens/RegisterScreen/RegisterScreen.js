import React, {useState, useEffect} from 'react';
import Main from '../../components/Main.js/Main';
// import './Register.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {register} from './../../actions/userActions';
import {useNavigate} from 'react-router-dom';
import {
  Container,
  TextField,
  CircularProgress,
  Avatar,
  Button,
} from '@mui/material';
import {Submit} from '../../components/Buttons/Submit';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [picture, setPicture] = useState(
    'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
  );

  const dispatch = useDispatch();
  const {userRegister} = useSelector((state) => state);
  const {loading, error, userInfo} = userRegister;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/notes');
    }
  }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      toast('Passwords does not match');
    } else {
      dispatch(register(name, email, password, picture));
    }
  };

  const uploadImage = (pic) => {
    if (pic.type === 'image/jpeg' || pic.type === 'image/png') {
      const formData = new FormData();
      formData.append('file', pic);
      formData.append('upload_preset', 'noteApp');
      formData.append('cloud_name', 'akashpatel18');
      fetch('https://api.cloudinary.com/v1_1/akashpatel18/image/upload', {
        method: 'post',
        body: formData,
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPicture(data.url.toString());
        });
    }
  };

  return (
    // <div className="registerContainer">
    //   <div className="image">
    //     <img
    //       src={picture}
    //       style={{height: 130, width: 130, borderRadius: 65}}
    //     />
    //   </div>
    //   <form onSubmit={submitHandler}>
    //     <div>
    //       <label>
    //         Name
    //         <input
    //           type="text"
    //           id="name"
    //           required
    //           onChange={(e) => setName(e.target.value)}
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Email
    //         <input
    //           type="text"
    //           required
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Password
    //         <input
    //           type="text"
    //           required
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Confirm Password
    //         <input
    //           type="text"
    //           required
    //           onChange={(e) => setConfirmPassword(e.target.value)}
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Profile Picture
    //         <input
    //           type="file"
    //           onChange={(e) => {
    //             uploadImage(e.target.files[0]);
    //             setPicture(URL.createObjectURL(e.target.files[0]));
    //           }}
    //         />
    //       </label>
    //       <input type="submit" />
    //     </div>
    //   </form>
    //   <ToastContainer />
    // </div>

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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Avatar style={{width: '80px', height: '80px'}} src={picture} />
          <label htmlFor="upload-photo">
            <input
              style={{display: 'none'}}
              id="upload-photo"
              name="upload-photo"
              type="file"
              onChange={(e) => {
                uploadImage(e.target.files[0]);
                setPicture(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <br />
            <br />
            <Button variant="contained" component="span">
              Upload Image
            </Button>{' '}
          </label>
        </div>
        <TextField
          id="standard-search"
          label="Name"
          style={{marginTop: 30}}
          variant="standard"
          onChange={(e) => setName(e.target.value)}
        />
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
        <TextField
          id="standard-search"
          label="Confirm Password"
          style={{marginTop: 30}}
          variant="standard"
          onChange={(e) => setConfirmPassword(e.target.value)}
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
};

export default RegisterScreen;
