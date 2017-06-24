import React from 'react';
import { Jumbotron } from 'reactstrap';

class Placeholder extends React.Component {
  static defaultProps = {
    isLoading: false
  }

  componetnWillReceiveProps() {
    console.log(this.props);
  }

  render() {
    return (
      <Jumbotron className="m-5">
        <p className="lead text-center">Enter the Search URL <em>and</em> your Google API Key.</p>
        <p className="lead text-center">{this.props.isLoading ? 'Loading...' : '👻'}</p>
      </Jumbotron>
    )
  }
}

export default Placeholder;
