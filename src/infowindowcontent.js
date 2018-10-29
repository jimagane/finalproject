import React from 'react';

class InfoWindowContent extends React.Component {

  handleClick = (result) => {
    let allMarkers = this.props.markers;
    for (const marker of allMarkers) {
      if (result.id === marker.id) {
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        window.setTimeout(function() {
          marker.setAnimation(null);
        }, 1200);
      }
    }
  }

  render() {
    return (
      <div id="infoContainer" onClick={event=> this.handleClick(this.props.result)}>
        <div id="venueDetails">
          <a href={this.props.result.url}><h3>{this.props.result.title}</h3></a>
            <p>{this.props.result.address}</p>
            <p>{this.props.result.phone}</p>
            <p>Rating: {this.props.result.rating}/5</p>
        </div>
        <div id="yelpBox">
        <div id="yelpReview">
          <span className="yelp-review" data-review-id="KNpcEBZXlF3n4C8STFi2vQ" data-hostname="www.yelp.com"></span>
        </div>
        </div>
      </div>
    )
  }
};

export default InfoWindowContent;
