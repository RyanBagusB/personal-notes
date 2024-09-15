import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { getInitialData } from "../utils";
import AddNoteModal from "./AddNoteModal";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: "",
      modalActive: false,
    };

    this.onShowAddNoteModalHandler = this.onShowAddNoteModalHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onCloseAddNoteModalHandler = this.onCloseAddNoteModalHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNoteHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onSearchNoteHandler(event) {
    this.setState({ search: event.target.value });
  }

  onShowAddNoteModalHandler() {
    this.setState({ modalActive: true });
  }

  onCloseAddNoteModalHandler() {
    this.setState({ modalActive: false });
  }

  onAddNoteHandler(title, body) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date().getTime(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
    console.log(this.state.notes)
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div className="note-app">
        <Header 
          onShowAddNoteModalHandler={this.onShowAddNoteModalHandler}
        />
        <Body
          notes={filteredNotes}
          onArchiveNote={this.onArchiveNoteHandler}
          onDeleteNote={this.onDeleteNoteHandler}
          onSearchNote={this.onSearchNoteHandler}
        />
        <AddNoteModal
          modalActive={this.state.modalActive}
          onCloseAddNoteModalHandler={this.onCloseAddNoteModalHandler}
          onAddNoteHandler={this.onAddNoteHandler}
        />
        <Footer />
      </div>
    );
  }
}

export default NoteApp;
