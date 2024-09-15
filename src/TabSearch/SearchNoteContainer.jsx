import React from "react";

const SearchNoteContainer = ({ onSearchNote }) => {
  return (
    <div className="search-note">
      <input
        id="search-note"
        type="text"
        placeholder="Cari catatan..."
        onChange={onSearchNote}
      />
    </div>
  );
};

export default SearchNoteContainer;
