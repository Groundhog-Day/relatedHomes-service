import React from 'react';
import PictureCarousel from './PictureCarousel.jsx';

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <PictureCarousel />
      </div>
    )
  }
}

export default HomeCarousel;
