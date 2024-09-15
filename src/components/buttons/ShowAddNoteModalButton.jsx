import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ShowAddNoteModalButton = ({ onShowAddNoteModalHandler }) => {
  return (
    <button className='header__add-note' onClick={onShowAddNoteModalHandler}>
      <FontAwesomeIcon icon={faPlus} />
      Tambah
    </button>
  );
};

export default ShowAddNoteModalButton;
