import React from "react";
import SearchNoteContainer from "./SearchNoteContainer";
import TabNoteContainer from "./TabNoteContainer";

const TabSearchWrapper = ({ onSearchNote }) => {
  return (
    <div className="tab-search-wrapper">
      <SearchNoteContainer onSearchNote={onSearchNote} />
      <TabNoteContainer />
    </div>
  );
};

export default TabSearchWrapper;
