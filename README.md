# React Notes App
## Preview of App
🌐 Link to application on web: https://practical-panini-14358b.netlify.app/
<img src="https://i.imgur.com/GUc6vT5.png " width="650px"></img>
## Installation Steps

In the project directory, you can run:

### `yarn`

### `yarn start`
Runs the development server and starts the application on the browser: http://localhost:3000/


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Features
- Adding Notes
- Deleting Notes
- Being able to save notes to local storage (useEffect React Hook)
```javascript
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
```
- Searching for a note (utilizes State and Filter function)
 ```javascript
 notes={notes.filter((note) =>
        note.text.toLowerCase().includes(searchText)
 ```
- Character count 
- Toggle Dark Mode
```javascript
const Header = ({handleToggleDarkMode}) => {
    return(<div className="header">
            <h1>Notes</h1>
            <button onClick={() => handleToggleDarkMode(
                (previousDarkMode)=> !previousDarkMode)
            } class="save">Toggle Mode</button>
    </div>);

}
```
