import React from 'react';
import data from '../../../dummyData.js';
import styled from 'styled-components';
import HomeCarousel from './HomeCarousel.jsx';
import axios from 'axios';

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

  componentDidMount() {
    axios.get('/getHomes')
      .then((response) => {
        console.log('AXIOS GET', response.data)
        this.setState({homes: response.data})
      })
      .catch((error) => {
        console.log(error)
      })
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