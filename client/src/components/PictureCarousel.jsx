import React from 'react';
import data from '../../../dummyData.js';
import CurrentImage from './CurrentImage.jsx';

class PictureCarousel extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    const current = (data.homes[0].images);
    console.log(current);
    return (
      <CurrentImage url={current[0]}/>
    )
  }
}

export default PictureCarousel;
