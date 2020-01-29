import React from 'react';
import CurrentImage from './CurrentImage.jsx';
import TitleInfo from './TitleInfo.jsx';
import Arrow from './Arrow.jsx';
import styled from 'styled-components';

const Pictures = styled.div({
  display: 'flex'
})

const Par = styled.p`
  padding-top: 22%;
  position: 'absolute';
`;

class PictureCarousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }

    this.nextImage = this.nextImage.bind(this);
    this.previouseImage = this.previouseImage.bind(this);
  }

  nextImage() {
    const lastImage = this.props.images.length - 1;
    if (this.state.currentIndex !== lastImage) {
      this.setState({currentIndex: this.state.currentIndex += 1});
    } else {
      this.setState({currentIndex: 0});
    }
  }

  previouseImage() {
    const firstImage = 0;
    if (this.state.currentIndex !== firstImage) {
      this.setState({currentIndex: this.state.currentIndex -= 1});
    } else {
      this.setState({currentIndex: this.props.images.length - 1});
    }
  }

  render () {
    const imgArr = this.props.images;
    const current = this.state.currentIndex;
    const homeInfo = this.props.home;

    return (
      <div>
        <Pictures>
          <Par> <Arrow clickFunc={this.previouseImage} direction='left'/> </Par>
          <CurrentImage url={imgArr[current]}/>
          <Par> <Arrow clickFunc={this.nextImage} direction='right'/> </Par>
        </Pictures>
        <TitleInfo home={homeInfo}/>
      </div>
    )
  }
}

export default PictureCarousel;
