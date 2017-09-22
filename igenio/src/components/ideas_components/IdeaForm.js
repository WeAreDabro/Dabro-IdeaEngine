import React, { Component } from 'react';

class ideaForm extends Component {
  render () {
    return (
      <form
        className='idea-form'
        onSubmit={this.props./*handleSubmit*/}
      >
      <textarea
        id='input'
        type='text'
        value={this.props./*userInput*/}
        name='tweet'
        onChange={this.props./*handleInputI*/}
      >
      </textarea>
      <br/>

      <button>Post</button>
      </form>
    )
  }
}

export default IdeaForm;
