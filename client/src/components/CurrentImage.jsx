import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow.jsx';
import BubbleIndicator from './BubbleIndicator.jsx';

const ArrowDiv = styled.div({
  display: 'flex',
  height: 'inherit',
  width: 'inherit',
  justifyContent: 'space-between',
  position: 'static'
});

const HeartDiv = styled.div({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'right'
});

const BubbleDiv = styled.div({
  display:'flex',
  justifyContent: 'center'
});

class CurrentImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hovering: false
    }

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

  render() {
    const Image = styled.div({
      height: '200px',
      width: '350px',
      backgroundImage: `url(${this.props.url})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column'
    });

    let placeHolder;

    if (this.state.hovering) {
      placeHolder = <ArrowDiv>
                      <Arrow clickFunc={this.props.leftClick} direction="left"> </Arrow>
                      <Arrow clickFunc={this.props.rightClick} direction="right"> </Arrow>
                    </ArrowDiv>
    } else {
      placeHolder = <ArrowDiv />
    }

    return (
      <Image onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <HeartDiv>Heart</HeartDiv>
          {placeHolder}
        <BubbleDiv><BubbleIndicator /></BubbleDiv>
      </Image>
    )
  }
};

export default CurrentImage;
