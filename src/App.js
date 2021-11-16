import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import Search from './Components/Search';
import Header from './Components/Header';

import NotesList from "./Components/NotesList";

const App = () => {

    const [notes, setNotes] = useState([
      {
        id: nanoid(),
        text: "This is my first note",
        date: "5/15/2021"
      },
      {
        id: nanoid(),
        text: "This is my second note",
        date: "5/15/2021"
      },
      {
        id: nanoid(),
        text: "This is my third note",
        date: "5/15/2021"
      },
      {
        id: nanoid(),
        text: "This is my fourth note",
        date: "5/16/2021"
      },
    ]);
    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    useEffect(()=>{
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
      
      if (savedNotes){
        setNotes(savedNotes);
      }

    }, [])

    useEffect(() => {
      localStorage.setItem(
        'react-notes-app-data',
         JSON.stringify(notes)
         );
    }, [notes]);

    const addNote = (text) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),

      }
      const newNotes= [...notes, newNote];
      setNotes(newNotes);
    }

    const deleteNote = (id) =>{
      const newNotes = notes.filter((note)=> note.id !== id);
      setNotes(newNotes);
    }

  return (
    // template string to check if DarkMode
    <div className={`${darkMode && 'darkMode'}`}> 
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>

      <Search handleSearchNote={setSearchText}/>

        <NotesList notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
          )} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        />
    </div>
  </div>
  
  );
}

export default App;
