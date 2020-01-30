import React from 'react';
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 75%;
  }
  100% {
    opacity: 100%;
  }
`

const LeftButton = styled.button`
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  animation: 0.2s ${fadeIn} ease-out;
  position: relative;
  top: 45%;
  left: 3%;
  opacity: 80%;
`;

const RightButton = styled(LeftButton)`
  left: 80%;
`;

class Arrow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hovering: false
    }

    this.handleHover = this.handleHover.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  handleHover() {
    this.setState(this.toggleHover)
  }

  toggleHover(state) {
    return {
      hovering: !state.hovering
    }
  }


  render() {
    if (this.props.direction === 'left') {
      return (
        <LeftButton onClick={this.props.clickFunc} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>&lt;</LeftButton>
      )
    } else {
     return (
        <RightButton onClick={this.props.clickFunc} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>&gt;</RightButton>
     )
    }
  }
};

export default Arrow;
