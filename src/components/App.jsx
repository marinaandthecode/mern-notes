import React, {useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';

function App() {

  const [notes, setNotes] = useState([]); 

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function updateNote() {
    setNotes(prevNotes => {
      return prevNotes
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div className="App" onDoubleClick>
      <Header />
      {notes.map((noteItem, index) => {
        return <Note key={index} id={index} content={noteItem.content} onAdd={addNote} onDelete={deleteNote} onUpdate={updateNote}/>
      })}
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;

// 1. Add handleChange fn (update note) and pass as props 
// 2. Add handleDelete fn (delete note) and pass as props 
// 3. Add addnote fn (create note) and pass as props 
// 4. Add notes state []