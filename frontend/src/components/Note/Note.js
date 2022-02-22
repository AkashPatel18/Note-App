import React from 'react';
import './Note.css';
import {useNavigate} from 'react-router-dom';

const Note = ({note}) => {
  const navigate = useNavigate();
  return (
    <div className="note">
      <div className="noteTitle">
        <p>{note.title}</p>
      </div>
      <div className="noteActions">
        <div className="noteEdit" onClick={() => navigate(`/note/${note._id}`)}>
          <p>Edit</p>
        </div>
        <div className="noteDelete">
          <p>Delete</p>
        </div>
      </div>
    </div>
  );
};

export default Note;
