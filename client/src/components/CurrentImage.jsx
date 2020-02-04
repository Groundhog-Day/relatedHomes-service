import React from 'react';
import styled, { keyframes } from 'styled-components';
import Arrow from './Arrow.jsx';
import BubbleIndicator from './BubbleIndicator.jsx';



const BubbleDiv = styled.div({
  display:'flex',
  justifyContent: 'center'
});


class CurrentImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {

    const ImageContainer = styled.div({
      transform: `translateX(-${props => props.translate}px)`,
      transition: 'transform ease-out 1s',
      height: '100%',
      width: '100%',
      display: 'flex',
    });

    const Image = styled.img`
      height: 100%;
      width: 100%;
    `;

    return (
      <ImageContainer translate={this.state.translate}>
        {this.props.images.map(image => {
            return (
            <Image
              key = {image}
              src = {image}
            /> )
          })}
      </ImageContainer>
    )
  };
};

export default CurrentImage;