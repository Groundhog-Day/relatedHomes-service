import React from 'react';

class TitleInfo extends React.Component {
  render () {
    const current = this.props.home;
    return (
      <div>
        <p>{current.homeCategory}</p>
        <p>{current.bedCount} beds</p>
        <p>{current.listingTitle}</p>
      </div>
    )
  }
}

export default TitleInfo;
