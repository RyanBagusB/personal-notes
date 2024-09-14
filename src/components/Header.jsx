import React from "react";
import AddNoteItemButton from "./buttons/AddNoteItemButton";

const Header = ({ onAddNoteHandler }) => {
  return (
    <div className="header">
      <h1 className="header__logo">NoteApp.</h1>
      <AddNoteItemButton onAddNoteHandler={onAddNoteHandler} />
    </div>
  );
};

export default Header;
