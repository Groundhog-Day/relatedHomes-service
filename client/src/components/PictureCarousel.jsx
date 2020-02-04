import React from 'react';
import styled, { keyframes } from 'styled-components';
import Arrow from './Arrow.jsx';

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

const HeartButton = styled.button`
  height: 30px;
  width: 30px;
  font-size: 15px;
  background-color: white;
  color: black;
  border-radius: 50%;
  opacity: 80%;
  :hover{ animation: 0.5s ${enlarge} 1 normal forwards};
`;

const Pictures = styled.div({
  height: '200px',
  width: '350px',
  postion: 'relative',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  margin: '0 auto'
})

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const ArrowDiv = styled.div({
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'space-between',
});

const HeartDiv = styled.div({
  display: 'flex',
  height: '30px',
  width: '30px',
  bottom: '95%',
  left: '89%',
  paddingTop: '4px',
  position: 'relative',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '20px'
});

const ImageContainer = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: ease-out 0.75s;
  height: 100%;
  width: 100%;
  display: flex;
`

class PictureCarousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      translate: 0,
      totalWidth: 350,
      images: this.props.images,
      hovering: false
    }

    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
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

  nextImage() {
    const lastImage = this.props.images.length - 1;
    const nextIndex = this.state.currentIndex + 1;
    if (this.state.currentIndex !== lastImage) {
      this.setState({
        currentIndex: nextIndex,
        translate: nextIndex * 350
      });
    } else {
      this.setState({
        currentIndex: 0,
        translate: 0
      });
    }
  }

  previousImage() {
    const firstImage = 0;
    const lastImage = this.props.images.length - 1;
    const prevIndex = this.state.currentIndex - 1;
    if (this.state.currentIndex !== firstImage) {
      this.setState({
        currentIndex: prevIndex,
        translate: prevIndex * 350
      });
    } else {
      this.setState({
        currentIndex: lastImage,
        translate: lastImage * 350
      });
    }
  }

  render () {
    let arrowDiv;

    if (this.state.hovering) {
      arrowDiv = (<ArrowDiv>
                    <HeartDiv><i className="glyphicon glyphicon-heart-empty"></i></HeartDiv>
                    <Arrow clickFunc={this.previousImage} direction="left"> </Arrow>
                    <Arrow clickFunc={this.nextImage} direction="right"> </Arrow>
                  </ArrowDiv>);
    } else {
      arrowDiv = <ArrowDiv />;
    };

    return (
        <Pictures onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <ImageContainer translate={this.state.translate}>
            {this.state.images.map(image => {
                return (
                <Image
                  key = {image}
                  src = {image}
                /> )
              })}
          </ImageContainer>
          {arrowDiv}
        </Pictures>
    )
  }
}

export default PictureCarousel;
