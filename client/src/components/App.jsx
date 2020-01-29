import React from 'react';
import data from '../../../dummyData.js';
import styled from 'styled-components';
import HomeCarousel from './HomeCarousel.jsx';

const Title = styled.h2`
  font-size: 1.60em;
  color: ${props => props.theme.dimGrey};
`;


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
        <div className="header">
          <Title>
            More homes you may like
          </Title>
        </div>
        <div className="homeCarousel">
          <HomeCarousel homes={this.state.homes}/>
        </div>
      </div>
    )
  };
}

export default App;