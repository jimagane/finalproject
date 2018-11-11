import React from 'react';
import InfoWindowContent from './infowindowcontent';
import * as YelpAPI from './YelpAPI';

class List extends React.Component {

  state = {
    reviews: this.props.venues,
    filteredReviews: []
  }

  componentDidMount() {
    this.loadYelpAPI();
  }

  loadYelpAPI = () => {
    let stateCopy = Object.assign({}, this.state);
    for (let i = 0; i < this.state.reviews.length; i++) {
      YelpAPI.getReviews(this.state.reviews[i].id)
      .then(data => {
        // Code solution for updating single property of object in array via copying object and slicing, credit to Radosław Miernik, url: 'https://stackoverflow.com/questions/35174489/reactjs-setstate-of-object-key-in-array/35174579'

        stateCopy.reviews = stateCopy.reviews.slice();
        stateCopy.reviews[i] = Object.assign({}, stateCopy.reviews[i]);
        stateCopy.reviews[i].reviews = data;
        if (i+1 === this.state.reviews.length) {
          this.setState(stateCopy);
        } else {
          return(stateCopy);
        }
      });
    }
  }

  renderList = () => {
    let allReviews = this.state.reviews;
    let filteredResults = this.props.filteredResults;
    let filteredReviews = [];
    for (const review of allReviews) {
      for (const result of filteredResults) {
        if (review.id === result.id) {
          filteredReviews.push(review);

        }


      }
    }
    console.log(filteredReviews);
    return filteredReviews.map((result) => (
      <InfoWindowContent key={result.id} result={result} handleListClick={this.props.handleListClick} reloadReview={this.props.reloadReview} loadYelpEmbedScript={this.props.loadYelpEmbedScript} />
    ))
  }

  linkToMap = () => {
    if (this.props.map === null) {
      return <div className="skip-link" tabIndex="0" aria-label="error loading google maps">Error loading Google Maps</div>
    } else {
      return <a href="#container" className="skip-link">Skip to Map</a>
    }
  }

  render() {
    return(
      <div className="options-box">
        <header>
          <h1>WeddVenView</h1>
          <h2 id="filter-results">Find Your Wedding Venue:</h2>
          <nav className="filter-options">
            <select id="price-select" name="prices" value={this.props.priceSelect} onChange={event=>this.props.selectPrice(event.target.value)}>
              <option value="50000">All Price Ranges</option>
              <option value="5000">$</option>
              <option value="12000">$$ and below</option>
              <option value="30000">$$$ and below</option>
            </select>
            <select id="rating-select" name="ratings" value={this.props.ratingSelect} onChange={event=>this.props.selectRating(event.target.value)}>
              <option value="0">All Ratings</option>
              <option value="3">***</option>
              <option value="4">****</option>
              <option value="5">*****</option>
            </select>
          </nav>
        </header>

        <main id="maincontent">
          <section id="list-container">
            <h2 tabIndex="0">Showing Results: {this.props.filteredResults.length} / {this.props.venues.length}</h2>
            {this.linkToMap()}
            <ul role="tablist" id="venues-list">
              {this.renderList()}

            </ul>
          </section>
        </main>
      </div>
    )
  }
};

export default List;
