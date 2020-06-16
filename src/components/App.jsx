import React, {useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';

function App() {
  
  // notes array
  const defaultNotes = [
    {
      content: "Welcome to Mynote! This is your first note", 
      dateCreated: new Date().toLocaleString()
    }, 
    {
      content: "You can edit this text", 
      dateCreated: new Date().toLocaleString()
    }
  ]

  const [notes, setNotes] = useState(defaultNotes);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  // function updateNote(newContent, id) {
  //   setNotes(prevNotes => {
  //     return [...prevNotes, [prevNotes[id].content] = newContent];
  //   });
  // }


  function deleteNote(id) {
    
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    })
  }

  // function changeBgr() {

  // }

  return (
    <div className="App">
      <Header />
      {notes.map((noteItem, index) => {
        return <Note 
          key={noteItem.dateCreated} 
          id={index} 
          onAdd={addNote} 
          onDelete={deleteNote} 
          // onEdit={updateNote} 
          content={noteItem.content}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;

// 1. Add handleChange fn (update note) and pass as props ! Lift state up from Note
// 2. Add handleDelete fn (delete note) and pass as props 
// 3. Add addnote fn (create note) and pass as props 
// 4. Add notes state []
// 5. Drag n drop 
// 6. Note color picker - separate component 
// 7. Bgrset

// Probably create notes list in App component like array of objects and pass them as props to "NoteItem"
// So each object(note) is created in addNote fuction of App which is triggered in Note. Only content is added from Note
//Try main reset css in file and inline style for components
// use destructuring {content, date, color} = props.note in note component 
// notes.filter(note => note.id !== id )
//react router dom, axios