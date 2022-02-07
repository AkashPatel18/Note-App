import React from 'react';
import './Note.css';

const Note = ({note}) => {
  return (
    <div className="note">
      <div className="noteTitle"></div>
      <div className="noteActions">
        <div className="noteEdit">
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
