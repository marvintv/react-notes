import { useState } from "react";

const AddNote = ({handleAddNote}) =>{
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0) // if character limit is exceeding 200. checks/validation
            setNoteText(event.target.value);
    }
    const handleSaveClick = () => {
        if(noteText.trim().length > 0){ // trim removes white spaces. checks if chars exist
            handleAddNote(noteText);
            setNoteText('');
        }
    }
    return (
        <div className="note-new">
            <textarea rows="8" 
            col="10" 
            placeholder="type to add note"
            value={noteText}
            onChange={handleChange}
            >
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default AddNote;