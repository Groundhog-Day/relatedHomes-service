import React from 'react';
import styled from 'styled-components';

const CurrentImage = ({ url }) => {

  const Image = styled.div({
    height: '200px',
    width: '310px',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    position: 'relative'
  });

  return (
    <Image />
  )
};

export default CurrentImage;
