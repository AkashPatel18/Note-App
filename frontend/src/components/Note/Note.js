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
import {useDispatch} from 'react-redux';
import {deleteNoteAction} from './../../actions/notesActions';

const Note = ({note, handleDelete}) => {
  const navigate = useNavigate();

  const time = note.createdAt.split('T');

  const dispatch = useDispatch();

  // const handleDelete = () => {
  //   dispatch(deleteNoteAction(note._id));
  // };

  return (
    <Card
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20,
        flexDirection: 'column',
        background: '#FAF9F6',
        boxShadow: '10px 5px 5px #cccccc',
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
          style={{marginBottom: 5, marginTop: 15, fontSize: 12}}
          sx={{mb: 1.5}}
          color="text.secondary">
          -Created On {time[0]}
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button size="small" onClick={() => navigate(`/${note._id}`)}>
          {' '}
          Edit
        </Button>
        <Button
          size="small"
          color="error"
          onClick={() => handleDelete(note._id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Note;
