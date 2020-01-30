import React from 'react';
import styled, { keyframes } from 'styled-components'

class BubbleIndicator extends React.Component {

  render() {
    return (
      <p>{this.props.currentIndex}</p>
    )
  }
}

export default BubbleIndicator;