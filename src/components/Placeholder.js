import React from 'react';
import { Jumbotron } from 'reactstrap';

class Placeholder extends React.Component {
  render() {
    return (
      <Jumbotron className="m-5">
        <p className="lead text-center">Enter the Search URL <em>and</em> your Google API Key.</p>
      </Jumbotron>
    )
  }
}

export default Placeholder;
