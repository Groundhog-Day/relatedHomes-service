import React from 'react';
import data from '../../../dummyData.js';
import styled from 'styled-components';
import HomeCarousel from './HomeCarousel.jsx';
import axios from 'axios';

const Title = styled.h2`
  font-size: 1.60em;
  color: ${props => props.theme.dimGrey};
`;

const AppContainer = styled.div({
  maxWidth: '1100px',
  maxHeight: '450px',
  postion: 'fixed',
})

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
        this.setState({homes: response.data})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <AppContainer >
        <div className="header">
          <Title>
            More homes you may like
          </Title>
        </div>
        <div className="homeCarousel">
          <HomeCarousel homes={this.state.homes}/>
        </div>
      </AppContainer >
    )
  };
}

export default App;