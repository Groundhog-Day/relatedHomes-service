import React from 'react';
import PictureCarousel from './PictureCarousel.jsx';
import TitleInfo from './TitleInfo.jsx';
import styled from 'styled-components';

const HomeCard = styled.div({
  height: '600px',
  width: '325px'
})

const HomesDisplay = styled.div({
  height: '500px',
  width: '1300px',
  display: 'flex',
})

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <HomesDisplay>
        {this.props.homes.map(home => {
         return (<HomeCard key={home.listingId}><PictureCarousel images={home.images} home={home}/></HomeCard>)
        })}
      </HomesDisplay>
    )
  }
}

export default HomeCarousel;
