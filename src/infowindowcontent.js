import React from 'react';

class InfoWindowContent extends React.Component {

  render() {
    return (
      <div id={this.props.result.id} onClick={event=> this.props.handleListClick(this.props.result)}>
        <div id="venueDetails">
          <a href={this.props.result.url} target="_blank" rel="noopener noreferrer"><h3>{this.props.result.title}</h3></a>
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
