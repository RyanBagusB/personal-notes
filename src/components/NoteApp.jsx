import React from "react";
import Header from "./Header";

class NoteApp extends React.Component {
  onAddNoteHandler() {
    console.log('Add note');
  }

  render() {
    return (
      <div className="note-app">
        <Header onAddNoteHandler={this.onAddNoteHandler} />
      </div>
    );
  }
}

export default NoteApp;
