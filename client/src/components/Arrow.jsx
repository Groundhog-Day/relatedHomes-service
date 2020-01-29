import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
`;

const Arrow = (props) => {
  if (props.direction === 'left') {
    return (
      <Button onClick={props.clickFunc}>&lt;</Button>
    )
  } else {
   return (
      <Button onClick={props.clickFunc}>&gt;</Button>
   )
  }
};

export default Arrow;
