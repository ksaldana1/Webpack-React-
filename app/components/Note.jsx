import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  render() {
    return this.state.editing ? this.renderEdit() : this.renderNote();
  }

  renderEdit = () => {
    return <input type="text"
      autofocus={true}
      placeholder={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderNote = () => {
    const onDelete = this.props.onDelete;
    return <div onClick={this.edit}>
    <span>{this.props.task}</span>
    {onDelete ? this.renderDelete() : null }
    </div>;
  };

  renderDelete = () => {
    return <button onClick={this.props.onDelete}>x</button>
  };

  edit = () => {
    this.setState({
      editing: true
    });
  };

  checkEnter = e => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = e => {
    if(this.props.onEdit) {
      this.props.onEdit(e.target.value);
    }

    this.setState({
      editing: false
    });
  };
}
