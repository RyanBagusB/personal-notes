import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class NoteApp extends React.Component {
  onAddNoteHandler() {
    console.log('Add note');
  }

  render() {
    return (
      <div className="note-app">
        <Header onAddNoteHandler={this.onAddNoteHandler} />
        <Footer />
      </div>
    );
  }
}

export default NoteApp;
