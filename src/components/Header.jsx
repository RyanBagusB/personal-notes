import React from "react";
import ShowAddNoteModalButton from "./buttons/ShowAddNoteModalButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onShowAddNoteModalHandler }) => {
  return (
    <div className="header">
      <h1 className="header__logo">
        <FontAwesomeIcon icon={faBook} />
        NoteApp.
      </h1>
      <ShowAddNoteModalButton
        onShowAddNoteModalHandler={onShowAddNoteModalHandler}
        
      />
    </div>
  );
};

export default Header;
