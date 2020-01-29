import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  postion: 'absolute';
`;

const InvisButton = styled.div`
  height: 45%;
  width: 25px;
  background-color: white;
  border-color: white;
  border-radius: 50%;
  display: inline-block;
`;

class Arrow extends React.Component {
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
    if (this.props.direction === 'left') {
      return (
        <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <InvisButton />
          {this.state.hovering &&
            <div><Button onClick={this.props.clickFunc}>&lt;</Button></div>
          }
        </div>
      )
    } else {
     return (
       <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
         <InvisButton />
         {this.state.hovering &&
            <div><Button onClick={this.props.clickFunc}>&gt;</Button></div>
         }
       </div>
     )
    }
  }
};

export default Arrow;
