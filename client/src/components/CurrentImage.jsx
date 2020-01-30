import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow.jsx';

class CurrentImage extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {

    const Image = styled.div({
      height: '200px',
      width: '350px',
      backgroundImage: `url(${this.props.url})`,
      backgroundSize: 'cover',
      display: 'flex',
    });

    return (
      <Image>
        <Arrow clickFunc={this.props.leftClick} direction="left" />
        <Arrow clickFunc={this.props.rightClick} direction="right" />
      </Image>
    )
  }
};

export default CurrentImage;
