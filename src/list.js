import React from 'react';
import InfoWindowContent from './infowindowcontent';

class List extends React.Component {

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
            <h2>Showing Results: {this.props.filteredResults.length} / {this.props.venues.length}</h2>
            <ul id="venues-list">
              {this.props.filteredResults.map((result) => (
                <InfoWindowContent key={result.id} result={result} handleListClick={this.props.handleListClick} showReviews={this.props.showReviews} />
              ))}
            </ul>
          </section>
        </main>
      </div>
    )
  }
};

export default List;
