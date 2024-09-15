import React from "react";

class AddNoteModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      maxTitleLength: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputTitle = event.target.value;
    if (inputTitle.length <= this.state.maxTitleLength) {
      this.setState({ title: inputTitle });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;

    this.props.onAddNoteHandler(title, body);
    this.props.onCloseAddNoteModalHandler();

    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    const characterLimit = this.state.maxTitleLength - this.state.title.length;

    return (
      <div className={`add-note-modal ${this.props.modalActive && 'active'}`}>
        <form className="note-input" onSubmit={this.onSubmitEventHandler}>
          <h2>Buat Catatan</h2>
          <p>Sisa karakter: {characterLimit}</p>
          <input
            id="addNoteTitle"
            type="text" 
            placeholder="Judul (max 50 karakter)" 
            value={this.state.title} 
            onChange={this.onTitleChangeEventHandler} 
            required 
          />

          <textarea
            id="addNoteBody"
            type="text" 
            placeholder="Tuliskan catatanmu disini..." 
            value={this.state.body} 
            onChange={this.onBodyChangeEventHandler} 
            required 
          />
          <div className="add-note-modal__action">
            <button onClick={this.props.onCloseAddNoteModalHandler} className="add-note-modal__cancel" type="button">Kembali</button>
            <button className="add-note-modal__confirm" type="submit">Tambah</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNoteModal;
