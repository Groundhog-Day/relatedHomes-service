import React from 'react';
import styled from 'styled-components';

const TitleCard = styled.div({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Montserrat',
});

const Top = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '8px',
  height: '30px'
});

const Top2 = styled.div({
  display: 'flex'
})

const Middle = styled.div({
  display: 'flex',
  justifyContent: 'left',
  height: '25px',
  fontSize: '16px'
});

const Bottom = styled.div({
  display: 'flex',
  justifyContent: 'left'
});

const StyledP = styled.p`
  font-family: 'Montserrat:300';
  color: 'grey';
`;

class TitleInfo extends React.Component {
  render () {
    const current = this.props.home;
    return (
      <TitleCard>
        <Top>
          <p style={{color: 'grey'}}>{current.homeCategory} - {current.bedCount} beds</p>
          <Top2>
            <p><i className="glyphicon glyphicon-star" style={{color: 'red'}}></i>{current.starCount}</p>
            <p style={{color: 'grey'}}>({current.reviewCount})</p>
          </Top2>
        </Top>
        <Middle>
          <p>{current.listingTitle}</p>
        </Middle>
        <Bottom>
          <p><strong style={{fontSize: '20px'}}>${current.pricePerNight}</strong> / night</p>
        </Bottom>
      </TitleCard>
    )
  }
}

export default TitleInfo;
