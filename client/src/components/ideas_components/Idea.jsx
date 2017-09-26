import React, { Component } from 'react';
// import '.../App.css';

class Idea extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ideaInput: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.anIdea !== this.props.anIdea;
  // }

  handleInput(e) {
    this.setState({
      ideaInput: e.target.textContent,
    });
  }

  handleUpdate(event) {
    console.log('handle update');
    this.props.handleUpdate(
      event,
      this.props.anIdea.id,
      this.state.ideaInput
    );
  }

  render() {
    return (

      <div>

        <span
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={(e) => this.handleUpdate(e)}
          onInput={(e) => this.handleInput(e)}>

          {this.props.anIdea.idea_content}

        </span>

        <button onClick={this.props.handleDelete}>X</button>
      </div>
    );
  }
}


export default Idea;
