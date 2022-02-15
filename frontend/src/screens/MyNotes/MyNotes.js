import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Main from '../../components/Main.js/Main';
import Note from '../../components/Note/Note';
import './MyNotes.css';

const MyNotes = ({history}) => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const path = '/notes';
    const data = await axios.get(path);
    setNotes(data?.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <Main title={'helo akash patel'}>
        <button className="createNote">
          <p>Create Note</p>
        </button>
        {notes.map((note) => {
          return <Note note={note} key={note?._id} />;
        })}
      </Main>
    </div>
  );
};

export default MyNotes;
