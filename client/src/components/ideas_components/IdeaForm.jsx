import React, { Component } from 'react';

class IdeaForm extends Component {
  render() {
    return (
      <form
        className="idea-form"
        onSubmit={this.props.handleSubmit}
      >
      <textarea
        id='input'
        type='text'
        value={this.props.ideaInput}
        name='idea'
        onChange={this.props.handleInput}
      >
      </textarea>
      <br/>

      <button>Post</button>
      </form>
    )
  }
}

export default IdeaForm;
