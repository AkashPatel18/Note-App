import {Button} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export const Submit = ({handleSubmit}) => {
  console.warn(handleSubmit, 'in');
  return <Button onClick={handleSubmit}>Submit</Button>;
};
