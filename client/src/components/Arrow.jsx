import React from 'react';
import styled, { keyframes } from 'styled-components'

const enlarge = keyframes`
  0% {
    height: 30px;
    width: 30px;
    opacity: 80%;
  }
  100% {
    height: 32px;
    width: 32px;
    opacity: 100%;
  }
`

const LeftButton = styled.button`
  height: 30px;
  width: 30px;
  font-size: 15px;
  margin-left: 2.5%;
  background-color: white;
  border-radius: 50%;
  position: relative;
  top: 45%;
  opacity: 80%;
  :hover{ animation: 0.5s ${enlarge} 1 normal forwards};
`;

const RightButton = styled.button`
  height: 30px;
  width: 30px;
  font-size: 15px;
  margin-right: 2.5%;
  background-color: white;
  border-radius: 50%;
  position: relative;
  opacity: 80%;
  top: 45%;
  :hover{ animation: 0.5s ${enlarge} 1 normal forwards};
`;

const Arrow = (props) => {
  if (props.direction === 'left') {
    return (
      <LeftButton onClick={props.clickFunc}>&lt;</LeftButton>
    )
  } else {
    return (
      <RightButton onClick={props.clickFunc}>&gt;</RightButton>
    )
  }
};

export default Arrow;
