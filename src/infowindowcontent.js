import React from 'react';

class InfoWindowContent extends React.Component {

  state = {
    active: true,
    button: 'See Reviews'
  }

  showReview = () => {
    const current = this.state.active;
    let reviewsButton = this.state.button;
    if (reviewsButton === 'See Reviews') {
      reviewsButton = 'Hide Reviews';
    } else {
      reviewsButton = 'See Reviews';
    }
    this.setState({active: !current, button: reviewsButton});
  }

  renderReviews = () => {
    if (this.props.result.reviews !== undefined && this.props.result.reviews.length > 0) {
      let id = this.props.result.reviews[0].id;
      let id2 = this.props.result.reviews[1].id;
      let id3 = this.props.result.reviews[2].id;
      return <div id="reviewsBox">
        <span className="yelp-review" data-review-id={id} data-hostname="www.yelp.com">...loading reviews</span>
        <span className="yelp-review" data-review-id={id2} data-hostname="www.yelp.com"></span>
        <span className="yelp-review" data-review-id={id3} data-hostname="www.yelp.com"></span>
        {this.loadYelpEmbedScript()}
      </div>
    } else {
      return <div tabIndex="0" aria-label="error, oops unable to load reviews">...oops! unable to load reviews</div>
    }
  }

  loadYelpEmbedScript = () => {
    let container = document.getElementById('yelpReview');
    let scriptYelp = document.createElement('script');
    let oldScript = document.getElementById('embed');
    scriptYelp.src= "https://www.yelp.com/embed/widgets.js";
    scriptYelp.async= true;
    scriptYelp.id= "embed";
    if (oldScript !== null) {
      container.removeChild(oldScript);
    }
    if (container !== null) {
      container.appendChild(scriptYelp);
    }
  }

  render() {
    let labelName = this.props.result.title;
    if (this.state.button === 'See Reviews') {
      labelName = `expand ${this.props.result.title} reviews`;
    } else {
      labelName = `collapse ${this.props.result.title} reviews`;
    }
    return (
      <li role="presentation" className="listitem" id={this.props.result.id} onClick={event=> this.props.handleListClick(this.props.result)}>
        <div id="venueDetails">
          <a id="title" href={this.props.result.url} target="_blank" rel="noopener noreferrer" role="tab" onFocus={event=> this.props.handleListClick(this.props.result)}><h3>{this.props.result.title}</h3></a>
            <p>{this.props.result.address}</p>
            <p>{this.props.result.phone}</p>
            <p>Rating: {this.props.result.rating}/5</p>
        </div>
        <div id="yelpBox">
          <button id="reviewsButton" aria-label={labelName} onClick={this.showReview}>{this.state.button}</button>
          <div id="yelpReview" aria-label="Yelp reviews" tabIndex="0" className={this.state.active ? 'showReview' : 'hideReview'}>
            {this.renderReviews()}
          </div>
        </div>
      </li>
    )
  }
};

export default InfoWindowContent;
