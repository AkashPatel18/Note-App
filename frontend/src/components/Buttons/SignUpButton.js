import {Button} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export const SignUpButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/register');
  };
  return <Button onClick={handleClick}>Sign Up</Button>;
};
