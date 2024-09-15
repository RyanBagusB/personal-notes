import React from "react";

const TabNoteContainer = () => {
  return (
    <nav className="tab-note-container">
      <input
        type="radio"
        id="beranda"
        name="tabs"
        defaultChecked={true}
      />
      <label htmlFor="beranda">Beranda</label>
      <input
        type="radio"
        id="arsip"
        name="tabs"
        defaultChecked={false}
      />
      <label htmlFor="arsip">Arsip</label>
    </nav>
  );
};

export default TabNoteContainer;
