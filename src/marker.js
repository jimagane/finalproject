import React from 'react';

class Marker extends React.Component {

  createMarker = (map) => {
    let position = this.props.result.location;
    let title = this.props.result.title;
    let info = this.props.result.info;
    let reviews = this.props.result.reviews;
    let id = this.props.result.id;
    let marker = new window.google.maps.Marker({
      position: position,
      title: title,
      info: info,
      reviews: reviews,
      map: map,
      animation: window.google.maps.Animation.DROP,
      id: id
    });
  }

  render() {
    return(
      {this.createMarker(this.props.map)}
    )
  }
};

export default Marker;
