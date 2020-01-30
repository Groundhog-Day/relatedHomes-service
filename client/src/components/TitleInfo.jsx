import React from 'react';
import styled from 'styled-components';

const TitleCard = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const Top = styled.div({
  display: 'flex',
  justifyContent: 'space-between',

});

const Middle = styled.div({
  display: 'flex',
  justifyContent: 'left',
});

const Bottom = styled.div({
  display: 'flex',
  justifyContent: 'left',
});

class TitleInfo extends React.Component {
  render () {
    const current = this.props.home;
    return (
      <TitleCard>
        <Top>
          <Top>
            <p>{current.homeCategory} -</p>
            <p>{current.bedCount} beds</p>
          </Top>

          <p><i className="glyphicon glyphicon-star"></i>{current.starCount} ({current.reviewCount})</p>
        </Top>
        <Middle>
          <p>{current.listingTitle}</p>
        </Middle>
        <Bottom>
          <p>${current.pricePerNight} / night</p>
        </Bottom>
      </TitleCard>
    )
  }
}

export default TitleInfo;
