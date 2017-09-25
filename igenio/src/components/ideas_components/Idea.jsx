import React, { Component } from 'react';
// import '.../App.css';

class Idea extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ideaInput: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.anIdea !== this.props.anIdea;
  // }

  handleInput(e) {
    this.setState({
      ideaInput: e.target.textContent,
    });
  }

  render() {
    return (
      <div>
        <span
          contentEditable={true}
          suppressContentEditableWarning={true}
          onInput={(e) => this.handleInput(e)}>
          {this.props.anIdea.idea_content}
        </span>
        <button onClick={(e) => this.props.handleUpdate(e, this.props.anIdea.id, this.state.ideaInput)}>SAVE</button>
        <button onClick={this.props.handleDelete}>X</button>
      </div>
    );
  }
}


export default Idea;
