import React from 'react';
import PictureCarousel from './PictureCarousel.jsx';
import TitleInfo from './TitleInfo.jsx';
import styled from 'styled-components';

const HomesDisplay = styled.div({
  maxHeight: '100%',
  maxwidth: '100%',
  display: 'flex',
  flexDirection: 'row'
})

const HomeCard = styled.div({
  maxHeight: '33%',
  maxWidth: '33%',
  margin: '10px',
  display: 'flex',
  flexDirection: 'column'
})

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <HomesDisplay>
          {this.props.homes.map(home => {
            return (
              <HomeCard key={home.listingId}>
                <PictureCarousel images={home.images} home={home}/>
                <TitleInfo home={home}/>
              </HomeCard>
            )
          })}
        </HomesDisplay>
    )
  }
}

export default HomeCarousel;
