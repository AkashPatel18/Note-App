import {Button} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export const Submit = ({handleSubmit}) => {
  return (
    <Button onClick={handleSubmit} style={{marginTop: 30}}>
      Submit
    </Button>
  );
};
