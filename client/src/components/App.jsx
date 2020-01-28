import React from 'react';
import data from '../../../dummyData.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      homes: data.homes
    }

  }

  render() {
    return (
      <div>
        <h2 className="header">More homes you may like</h2>
      </div>
    )
  };
}

export default App;