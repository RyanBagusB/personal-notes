import React from "react";
import NoteList from "./NoteList";

const NoteListContainer = ({ notes, onDeleteNote, onArchiveNote }) => {
  return (
    <div className="note-list-container">
      <NoteList
        onDeleteNote={onDeleteNote}
        className="note-list__home"
        notes={notes}
        isArchived={false}
        onArchiveNote={onArchiveNote}
      />
      <NoteList
        onDeleteNote={onDeleteNote}
        className="note-list__archived"
        notes={notes} isArchived={true}
        onArchiveNote={onArchiveNote}
      />
    </div>
  );
};

export default NoteListContainer;
