import React from 'react';
import './LandingPage.css';
import {Link, withRouter, useNavigate} from 'react-router-dom';
import {Button, Container, Typography} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../actions/userActions';
import LoginButton from '../../components/Buttons/LoginButton';
import {SignUpButton} from '../../components/Buttons/SignUpButton';

const LandingPage = ({}) => {
  const navigate = useNavigate();
  const {userInfo} = useSelector((state) => state).userLogin;
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <Container fixed>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: 100,
        }}>
        <Typography variant="h3">Welcome to Note Down 👋 </Typography>
        <Typography variant="p">One safe place for all your notes.</Typography>
      </div>
      {userInfo ? (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 60}}>
          <Button onClick={() => navigate('profile')}>Profile</Button>
          <Button onClick={() => navigate('notes')}>Notes</Button>
          <Button onClick={() => navigate('create')}>Create Note</Button>
          <Button onClick={handleLogOut}>logOut</Button>
        </div>
      ) : (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 60}}>
          <LoginButton />
          <SignUpButton />
        </div>
      )}
    </Container>
  );
};

export default LandingPage;
