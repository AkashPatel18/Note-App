import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Main from '../../components/Main.js/Main';
import Note from '../../components/Note/Note';
import './MyNotes.css';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNotes} from './../../actions/notesActions';
import {useNavigate} from 'react-router-dom';

const MyNotes = ({history}) => {
  const dispatch = useDispatch();
  const {notes, error, loading} = useSelector((state) => state).notes;

  const {userInfo} = useSelector((state) => state).userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchNotes());
    if (!userInfo) {
      navigate('/');
    }
  }, [userInfo]);

  console.log(notes);

  return (
    <div>
      <Main>
        <button className="createNote">
          <p>Create Note</p>
        </button>
        {loading && <p>Loading....</p>}
        {error && <p>Error...</p>}
        {notes?.map((note) => {
          return <Note note={note} key={note?._id} />;
        })}
      </Main>
    </div>
  );
};

export default MyNotes;
