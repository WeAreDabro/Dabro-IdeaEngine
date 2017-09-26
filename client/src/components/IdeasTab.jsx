import React, { Component } from 'react';
import axios from 'axios';
import IdeaList from './ideas_components/IdeaList';
import IdeaForm from './ideas_components/IdeaForm';

class IdeasTab extends Component {
  constructor() {
    super();

    this.state = {
      apiData: [], // Hold api call data for all ideas
      ideaInput: '', // Holds current value of form input
    };

    // Bind methods to prevent any weird errors regarding 'this'.
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    // Get all ideas on page load.
    this.renderAllIdeas();
  }

  handleSubmit(event) {
    // alert('your idea was posted');
    // Stop browser from refreshing when submit button is pressed.
    event.preventDefault();
    // Create a new idea and pass the idea content in the
    // request body.
    axios.post('/api/ideas', {
      user_id: this.props.user.user_id,
      idea_content: this.state.ideaInput,
    })
      .then(() => {
        // After the new idea has been made,
        // get the new, updated list of ideas.
        this.renderAllIdeas();
      })
      .catch(err => console.log(err));
  }

  handleUpdate(event, id, value) {
    if (value) {
      // alert('your idea was posted');
      // Stop browser from refreshing when submit button is pressed.
      event.preventDefault();
      // Update idea and pass the idea content in the
      // request body.
      axios.put(`/api/ideas/${id}`, {
        idea_content: value,
      })
        .then(() => {
          // After the new idea has been updated,
          // get the new, updated list of ideas.
          this.renderAllIdeas();
        })
        .catch(err => console.log(err));
    }
  }

  handleInput(event) {
    // This sets ideaInput in state to the current value of
    // the input field( in Form.js).
    this.setState({
      ideaInput: event.target.value,
    });
  }

  handleDelete(e, id) {
    // Stop browser from refreshing when submit button is pressed.
    e.preventDefault();

    axios.delete(`/api/ideas/${id}`)
      .then(() => {
        // After the idea has been deleted,
        // get the new, updated list of ideas.
        this.renderAllIdeas();
      })
      .catch((err) => console.log(err));
  }

  renderAllIdeas() {
    // This sets ideaData in state to all ideas from our ajax call to our server,
    // which will in turn, cause the ideaList component to render with our list of ideas.
    axios.get(`/api/ideas/${this.props.user.user_id}`)
      .then((res) => {
        // console.log(res.data.data.ideas);
        this.setState({
          apiData: res.data.data.ideas, // we are setting ideaData to res.data.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="idea-tab">
        <div>
        <h1>🤔 What's your idea?💡 </h1>
        </div>
        <div id="idea-input">
        <IdeaForm
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          ideaInput={this.state.ideaInput}
        />
        </div>

        <IdeaList
          ideaData={this.state.apiData}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />

      </div>
    );
  }
}

export default IdeasTab;
