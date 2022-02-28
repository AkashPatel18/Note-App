import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import {
  Container,
  InputLabel,
  FormControl,
  Input,
  FormHelperText,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import ReactMarkdowm from 'react-markdown';
import {updateNote} from './../../actions/notesActions';

export const SingleNote = () => {
  const {id} = useParams();

  const {notes} = useSelector((state) => state).notes;

  const note = notes.find((note) => note._id === id);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [category, setCategory] = useState(note.category);
  const [date, setDate] = useState();

  const submitHandler = () => {
    dispatch(updateNote(id, title, content, category));
  };

  return (
    <Container
      fixed
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '90%',
        width: 700,
      }}>
      <FormControl>
        <TextField
          varient={'outlined'}
          // label={'Title'}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{marginTop: 20, marginBottom: 20}}
        />
        <TextField
          varient={'outlined'}
          // label={'Content'}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{marginTop: 20, marginBottom: 20}}
          multiline
          rows={2}
          maxRows={4}
        />
        {content && (
          <>
            <Typography>Note Preview :</Typography>
            <ReactMarkdowm>{content}</ReactMarkdowm>
          </>
        )}
        <TextField
          value={category}
          varient={'outlined'}
          // label={'Category'}
          onChange={(e) => setCategory(e.target.value)}
          style={{marginTop: 20, marginBottom: 20}}
        />
        <Button onClick={submitHandler}>Update Note</Button>
      </FormControl>
    </Container>
  );
};
