import React, { useState, useEffect } from "react";
import "./Notes.css";

const Notes = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const saveNote = () => {
    if (note.trim() === "") {
      alert("Please enter a note before saving.");
      return;
    }
    setNotes([...notes, note]);
    setNote("");
  };

  return (
    <div className="notes-container">
      <h1 className="notes-title">Notes Page</h1>
      <textarea
        className="note-input"
        value={note}
        onChange={handleNoteChange}
        placeholder="Write your note here..."
      />
      <button className="save-button" onClick={saveNote}>Save Note</button>

      <h2 className="notes-subtitle">Saved Notes:</h2>
      <ul className="notes-list">
        {notes.map((n, index) => (
          <li className="note-item" key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
