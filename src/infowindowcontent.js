import React from 'react';

class InfoWindowContent extends React.Component {

  state = {
    active: false,
    button: 'See Reviews'
  }

  showReview = (id) => {
    const current = this.state.active;
    let reviewsButton = this.state.button;
    if (reviewsButton === 'See Reviews') {
      reviewsButton = 'Hide Reviews';
    } else {
      reviewsButton = 'See Reviews';
    }
    this.setState({active: !current, button: reviewsButton});
  }

  render() {
    return (
      <div className="listitem" id={this.props.result.id} onClick={event=> this.props.handleListClick(this.props.result)}>
        <div id="venueDetails">
          <a id="title" href={this.props.result.url} target="_blank" rel="noopener noreferrer"><h3>{this.props.result.title}</h3></a>
            <p>{this.props.result.address}</p>
            <p>{this.props.result.phone}</p>
            <p>Rating: {this.props.result.rating}/5</p>
        </div>
        <div id="yelpBox">
          <button id="reviewsButton" ref={this.props.result.id} onClick={this.showReview}>{this.state.button}</button>
          <div id="yelpReview" className={this.state.active?'showReview': null}>
            <span className="yelp-review" data-review-id="KNpcEBZXlF3n4C8STFi2vQ" data-hostname="www.yelp.com"></span>
          </div>
        </div>
      </div>
    )
  }
};

export default InfoWindowContent;
