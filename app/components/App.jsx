import uuid from 'node-uuid';
import React from 'react';

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
        <ul>{notes.map(note =>
          <li key={note.id}>{note.task}</li>
        )}</ul>
      </div>
    )
  }

};

