import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeleteNoteItemButton = ({ id, onDeleteNote }) => {
    return (
      <button onClick={() => onDeleteNote(id)} className='note-item__delete'>
        <FontAwesomeIcon icon={faTrash} title="Hapus" />
      </button>
    );
};

export default DeleteNoteItemButton;
