import React from 'react';
import './Note.css';
import {useNavigate} from 'react-router-dom';
import {Container} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const Note = ({note}) => {
  const navigate = useNavigate();
  console.log(note);

  const time = note.createdAt.split('T');

  return (
    <Card
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
      }}
      variant={'elevation'}>
      <CardContent>
        <Typography variant="h5" component="div" style={{marginBottom: 10}}>
          {note.title}
        </Typography>
        <Chip
          className="chip"
          label={`Category : ${note.category}`}
          style={{color: 'white', marginBottom: 10}}
        />
        <Typography variant="body2" style={{marginBottom: 10}}>
          {note.content}
        </Typography>
        <Typography sx={{mb: 1.5}} color="text.secondary">
          -Created On {time[0]}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Note;
