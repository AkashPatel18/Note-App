import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createNote} from '../../actions/notesActions';
import {useNavigate} from 'react-router-dom';

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
    e.preventDefault();
    if ((!title, !content, !category)) return;
    dispatch(createNote(title, content, category));
    resetHandler();
    navigate('/notes');
  };

  return <div>CreateNote</div>;
};
