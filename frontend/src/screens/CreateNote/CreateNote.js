import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createNote} from '../../actions/notesActions';
import {useNavigate} from 'react-router-dom';
import ReactMarkdowm from 'react-markdown';

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
    <div>
      <form>
        <div>
          <label>Title</label>
          <input type={'text'} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content</label>
          <input type={'text'} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div>
          <label>Category</label>
          <input type={'text'} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <input type={'submit'} onClick={submitHandler} />
      </form>
    </div>
  );
};
