import React, {useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';

function App() {

  const [notes, setNotes] = useState([{content: "Hello, it's your first note!", dateCreated: new Date().toLocaleString()}]); 

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    console.log(id);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div className="App">
      <Header />
      {notes.map((noteItem, index) => {
        return <Note key={noteItem.dateCreated} content={noteItem.content} id={index} onAdd={addNote} onDelete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;

// 1. Add handleChange fn (update note) and pass as props 
// 2. Add handleDelete fn (delete note) and pass as props 
// 3. Add addnote fn (create note) and pass as props 
// 4. Add notes state []
// 5. Drag n drop 
// 6. Note color picker
// 7. Bgrset