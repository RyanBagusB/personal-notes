import React from "react";
import NoteItemHeader from "./NoteItemHeader";
import { showFormattedDate } from "../utils";

const NoteItem = ({ id, title, body, createdAt, archived, onDeleteNote, onArchiveNote }) => {
  return (
    <div className='note-item'>
      <NoteItemHeader
        onDeleteNote={onDeleteNote}
        id={id} title={title}
        archived={archived}
        onArchiveNote={onArchiveNote}
      />
      <p className="note-item__body">{body}</p>
      <div className="note-item__footer">
        <p>{showFormattedDate(createdAt)}</p>
      </div>
    </div>
  );
};

export default NoteItem;
