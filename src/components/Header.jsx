import React from "react";
import AddNoteItemButton from "./buttons/AddNoteItemButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onAddNoteHandler }) => {
  return (
    <div className="header">
      <h1 className="header__logo">
        <FontAwesomeIcon icon={faBook} />
        NoteApp.
      </h1>
      <AddNoteItemButton onAddNoteHandler={onAddNoteHandler} />
    </div>
  );
};

export default Header;
