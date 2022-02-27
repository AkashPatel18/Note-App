import {Button} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function LoginButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };

  return <Button onClick={handleClick}>Login</Button>;
}
