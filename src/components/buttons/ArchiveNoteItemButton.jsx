import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const ArchiveNoteItemButton = ({ id, archived, onArchiveNote }) => {
  return (
    <button onClick={() => onArchiveNote(id)}>
      {archived ? (
        <FontAwesomeIcon icon={faBoxOpen} title="Pindahkan" />
      ) : (
        <FontAwesomeIcon icon={faBoxArchive} title="Arsipkan" />
      )}
    </button>
  );
};

export default ArchiveNoteItemButton;
