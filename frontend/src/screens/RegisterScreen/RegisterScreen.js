import React, {useState, useEffect} from 'react';
import Main from '../../components/Main.js/Main';
// import './Register.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {register} from './../../actions/userActions';
import {useNavigate} from 'react-router-dom';

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
    <div className="registerContainer">
      <div className="image">
        <img
          src={picture}
          style={{height: 130, width: 130, borderRadius: 65}}
        />
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Name
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="text"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Confirm Password
            <input
              type="text"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Profile Picture
            <input
              type="file"
              onChange={(e) => {
                uploadImage(e.target.files[0]);
                setPicture(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </label>
          <input type="submit" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterScreen;
