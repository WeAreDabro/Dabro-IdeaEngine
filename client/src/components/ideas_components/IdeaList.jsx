import React, { Component } from 'react';
import Idea from './Idea';

class IdeaList extends Component {
  render() {
    return (
      <div id="scrollbar">
        {this.props.ideaData.map((idea, i) => {
        console.log("This is an idea in the feed " + idea.idea_content);
        // This  is the single idea that will display after each loop.
        return (
          <Idea
            anIdea={idea}
            key={idea.id}
            handleDelete={(e) => this.props.handleDelete(e, idea.id)}
            handleUpdate={this.props.handleUpdate}
          />
        )})}
       </div>
       )
   }
}


export default IdeaList;
