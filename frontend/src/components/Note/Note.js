import React from 'react';
import './Note.css';
import {useNavigate} from 'react-router-dom';
import {Container} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ReactMarkdowm from 'react-markdown';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

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
        marginTop: 20,
        flexDirection: 'column',
      }}
      variant={'elevation'}>
      <CardContent>
        <Typography
          variant="h5"
          component="p"
          style={{marginBottom: 15, marginTop: 15}}>
          {note.title}
        </Typography>
        <Chip
          className="chip"
          label={`Category : ${note.category}`}
          style={{color: 'white', marginBottom: 15, marginBottom: 15}}
        />
        <ReactMarkdowm>{note.content}</ReactMarkdowm>
        {/* <Typography variant="body2" style={{marginBottom: 15}}>
          {note.content}
        </Typography> */}
        <Typography
          style={{marginBottom: 15, marginTop: 15}}
          sx={{mb: 1.5}}
          color="text.secondary">
          -Created On {time[0]}
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button size="small"> Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Note;
