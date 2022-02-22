import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';

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

  return (
    <div>
      <p>{note?.title}</p>
      <p>{note?.content}</p>
      <p>{note?.category}</p>
    </div>
  );
};
