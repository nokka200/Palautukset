import { useState } from 'react'
import Note from './components/Note'


const App = (props) => {

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('uusi note!');
  const [showAll, setShowAll] = useState(true);

  const result = notes.map(note => note.id);
  console.log(result);

  const result2 = notes.map((note) => {
    return note.id
  });
  console.log(result2);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject));
    setNewNote('');
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>  
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">Tallenna</button>
      </form>
    </div>
  )
}



export default App