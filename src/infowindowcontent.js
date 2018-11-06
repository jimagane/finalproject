import React from 'react';

class InfoWindowContent extends React.Component {

  state = {
    active: true,
    button: 'See Reviews',
    first: '',
    second: '',
    third: ''
  }

  showReview = (id) => {
    const current = this.state.active;
    let reviewsButton = this.state.button;
    if (reviewsButton === 'See Reviews') {
      reviewsButton = 'Hide Reviews';
    } else {
      reviewsButton = 'See Reviews';
    }
    this.getReviews();
    this.setState({active: !current, button: reviewsButton});
  }

  getReviews = () => {
    let reviews = this.props.result.reviews;
    let first = '';
    let second ='';
    let third = '';
    if (reviews !== undefined) {
      if (reviews.length > 0) {
        first = `'${reviews[0].id}'`;
        second = `'${reviews[1].id}'`;
        third = `'${reviews[2].id}'`;
      }
    }
    this.setState({first: first, second: second, third: third})
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
            <span className="yelp-review" data-review-id={this.state.first} data-hostname="www.yelp.com"></span>
          </div>
        </div>
      </div>
    )
  }
};

export default InfoWindowContent;
