import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createNote} from '../../actions/notesActions';
import {useNavigate} from 'react-router-dom';
import ReactMarkdowm from 'react-markdown';
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

export const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetHandler = () => {
    setTitle('');
    setContent('');
    setCategory('');
  };

  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    if ((!title, !content, !category)) return;
    dispatch(createNote(title, content, category));
    resetHandler();
    navigate('/notes');
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
          label={'Title'}
          onChange={(e) => setTitle(e.target.value)}
          style={{marginTop: 20, marginBottom: 20}}
        />
        <TextField
          varient={'outlined'}
          label={'Content'}
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
          varient={'outlined'}
          label={'Category'}
          onChange={(e) => setCategory(e.target.value)}
          style={{marginTop: 20, marginBottom: 20}}
        />
        <Button onClick={submitHandler}>Create</Button>
      </FormControl>
    </Container>
  );
};
