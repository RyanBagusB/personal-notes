import React from "react";
import DeleteNoteItemButton from "./buttons/DeleteNoteItemButton";
import ArchiveNoteItemButton from "./buttons/ArchiveNoteItemButton";

const NoteItemHeader = ({ id, title, archived, onDeleteNote, onArchiveNote }) => {
  return (
    <div className="note-item__header">
      <h3 className="note-item__title">{title}</h3>

      <div className="note-item__action">
        <ArchiveNoteItemButton id={id} archived={archived} onArchiveNote={onArchiveNote} />
        <DeleteNoteItemButton id={id} onDeleteNote={onDeleteNote} />
      </div>
    </div>
  );
};

export default NoteItemHeader;
