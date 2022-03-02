import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Main from '../../components/Main.js/Main';
import Note from '../../components/Note/Note';
import './MyNotes.css';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNotes, deleteNoteAction} from './../../actions/notesActions';
import {useNavigate} from 'react-router-dom';
import {Container, Button} from '@mui/material';
import {ToastContainer, toast} from 'react-toastify';

const MyNotes = ({search}) => {
  const dispatch = useDispatch();
  const {notes, error, loading} = useSelector((state) => state).notes;

  const {userInfo} = useSelector((state) => state).userLogin;

  const navigate = useNavigate();

  const {success} = useSelector((state) => state).noteDelete;

  useEffect(() => {
    dispatch(fetchNotes());
    if (!userInfo) {
      navigate('/');
    }

    if (success) {
      toast('Note Deleted.!');
    }
  }, [userInfo, success]);

  const handleDelete = (id) => {
    dispatch(deleteNoteAction(id));
  };

  return (
    <Container
      fixed
      style={{
        // border: '1px solid blue',
        width: 700,
        maxWidth: '90%',
        justifyContent: 'center',
        // display: 'flex',
      }}>
      <ToastContainer />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Button onClick={() => navigate('/create')}>Create Note</Button>
      </div>
      <Container style={{display: 'flex', flexDirection: 'column'}}>
        {notes
          ?.reverse()
          .filter((note) =>
            note.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((note) => {
            return (
              <Note note={note} key={note?._id} handleDelete={handleDelete} />
            );
          })}
      </Container>
    </Container>
  );
};

export default MyNotes;
