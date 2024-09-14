import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddNoteItemButton = ({ onAddNoteHandler }) => {
  return (
    <button className='header__add-note' onClick={onAddNoteHandler}>
      <FontAwesomeIcon icon={faPlus} />
      Tambah
    </button>
  );
};

export default AddNoteItemButton;
