import uuid from 'node-uuid';
import React from 'react';

import Note from './Note.jsx';
import Notes from './Notes.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Stuff'
        },
        {
          id: uuid.v4(),
          task: 'Learn More Stuff'
        },
        {
          id: uuid.v4(),
          task: 'Learn All The Stuff'
        }
      ]
    }
  }

  render() {
    const notes = this.state.notes;
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} onEdit={this.editNote} onDelete={this.deleteNote}/>
      </div>
    )
  }

  editNote = (id, task) => {
    const notes = this.state.notes.map(note => {
      if (note.id === id && task) {
        note.task = task;
      }
      return note;
    });
    this.setState({notes});
  };

  deleteNote = id => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    })
  };

  addNote = () => {
    this.setState({
      notes: [...this.state.notes, {id: uuid.v4(), task: 'New Task'}]
    });
  };

};

