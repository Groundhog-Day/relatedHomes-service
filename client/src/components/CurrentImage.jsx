import React from 'react';
import styled, { keyframes } from 'styled-components';
import Arrow from './Arrow.jsx';
import BubbleIndicator from './BubbleIndicator.jsx';

const ArrowDiv = styled.div({
  display: 'flex',
  height: 'inherit',
  width: 'inherit',
  justifyContent: 'space-between',
  position: 'static'
});

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

    let arrowDiv;
    let heartDiv;

    if (this.state.hovering) {
      arrowDiv = (<ArrowDiv>
                      <Arrow clickFunc={this.props.leftClick} direction="left"> </Arrow>
                      <Arrow clickFunc={this.props.rightClick} direction="right"> </Arrow>
                    </ArrowDiv>);

      heartDiv = (<HeartDiv>
                    <HeartButton>
                      <i class="glyphicon glyphicon-heart-empty"></i>
                    </HeartButton>
                  </HeartDiv>);
    } else {
      arrowDiv = <ArrowDiv />
      heartDiv = <HeartDiv />
    }

    return (
      <Image onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        {heartDiv}
        {arrowDiv}
        <BubbleDiv>
          <BubbleIndicator />
        </BubbleDiv>
      </Image>
    )
  }
};

export default CurrentImage;
