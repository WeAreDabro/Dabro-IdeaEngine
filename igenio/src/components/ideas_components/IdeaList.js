import React, { Component } from 'react';
import Idea from './idea';

class IdeaList extends Component {
  render() {
    return(
      <div id='idea-list'>
      {this.props./*ideaData*/.map((idea, i) => { //This loops through the existing ideas in the db and loads them into the page
        console.log("This is an idea in the feed " + idea);
        // This  is the single idea that will display after each loop.
        return (
          <idea
            anIdea={idea}
            key={idea.id}
            handleDelete={(e) => this.props.handleDelete(idea.id)}
          />
        )})}
       </div>
       )
   }
}


export default IdeaList;
