import uuid from 'node-uuid';
import assign from 'object-assign';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';


class NoteStore {
  constructor() {
    // map each action to a method by name
    this.bindActions(NoteActions);

    this.notes = [];
  };

  create(note) {
    const notes = this.notes;
    // generate unique id
    note.id = uuid.v4();
    // concat notes array and new note
    this.setState({
      notes: [...notes, note]
    });
  };

  update(updatedNote) {
    const notes = this.notes.map(note => {
      // if object matches note id
      if (note.id === updatedNote.id) {
        // assign new object, only update changed properties
        return assign({}, note, updatedNote);
      }
      // otherwise return unchanged note
      return note;
    });
    // equivalent to {notes: notes}
    this.setState({notes});
  };

  delete(id) {
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  };
}

export default alt.createStore(NoteStore, 'NoteStore');
