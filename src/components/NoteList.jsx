import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, className, isArchived, onDeleteNote, onArchiveNote }) => {
  const filteredNotes = notes.filter((note) => note.archived === isArchived);

  return (
    <div className={`${className} ${filteredNotes.length === 0 && 'empty'}`}>
      {
        filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteItem
              {...note}
              key={note.id}
              id={note.id}
              onDeleteNote={onDeleteNote}
              onArchiveNote={onArchiveNote}
            />
          ))
        ) : (
          <p className="note-item__not-found">Tidak ada catatan</p>
        )
      }
    </div>
  );
};

export default NoteList;
