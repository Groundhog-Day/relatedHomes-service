import React from 'react';
import styled, { keyframes } from 'styled-components'

const Arrow = (props) => {

  const StyledArrow = styled.div({
    display: 'flex',
    height: '30px',
    width: '30px',
    bottom: '50%',
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '50%',
    cursor: 'pointer',
    right: props.direction === 'left' ? '44%' : '2%'
  })


  return (
    <StyledArrow onClick={props.clickFunc}>
      {props.direction === 'right' ? <img src="https://img.icons8.com/android/24/000000/forward.png"/> : <img src="https://img.icons8.com/android/24/000000/back.png"/>}
    </StyledArrow>
  )

};

export default Arrow;
