import React from 'react';
import styled from 'styled-components';

const Title = styled.div({

})

class TitleInfo extends React.Component {
  render () {
    const current = this.props.home;
    return (
      <Title>
        <p>{current.homeCategory}</p>
        <p>{current.bedCount} beds</p>
        <p>{current.starCount}</p>
        <p>({current.reviewCount})</p>
        <p>{current.listingTitle}</p>
      </Title>
    )
  }
}

export default TitleInfo;
