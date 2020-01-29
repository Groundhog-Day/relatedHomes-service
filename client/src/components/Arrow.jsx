import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: grey;
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
