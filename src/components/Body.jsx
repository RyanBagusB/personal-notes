import React from "react";
import TabSearchWrapper from "../TabSearch/TabSearchWrapper";
import NoteListContainer from "./NoteListContainer";

const Body = ({ notes, onDeleteNote, onArchiveNote, onSearchNote }) => {
  return (
    <div className="body">
      <h2>Daftar Catatan</h2>
      <TabSearchWrapper onSearchNote={onSearchNote} />
      <NoteListContainer
        onArchiveNote={onArchiveNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
      />
    </div>
  );
};

export default Body;
