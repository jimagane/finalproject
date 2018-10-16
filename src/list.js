import React from 'react';
import InfoWindowContent from './infowindowcontent';

class List extends React.Component {

// TODO: render infowindow for each of filteredResults


  // TODO: if listitem clicked, bounce and highlight marker
  render() {

    return(
      <div className="options-box">
        <header>
          <h1>WeddVenView</h1>
          <h2 id="filter-results">Find Your Wedding Venue:</h2>
          <nav className="filter-options">
            <select id="location-select" name="locations" >
              <option value="all">All Locations</option>
              <option value="church">Church</option>
              <option value="winery">Winery</option>
              <option value="private">Private</option>
            </select>
            <select id="price-select" name="prices" >
              <option value="all">All Price Ranges</option>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
            </select>
            <select id="size-select" name="sizes" >
              <option value="all">All Sizes</option>
              <option value="small">under 50</option>
              <option value="medium">50-100</option>
              <option value="large">over 100</option>
            </select>
            <select id="rating-select" name="ratings" value={this.props.ratings} onChange={event=>this.props.filterRatings(event.target.value)}>
              <option value="0">All Ratings</option>
              <option value="3">** and up</option>
              <option value="4">*** and up</option>
              <option value="5">**** and up</option>
            </select>
          </nav>
        </header>

        <main id="maincontent">
          <section id="list-container">
            <h3>Results:</h3>
            <ul id="venues-list">
              {this.props.filteredResults.map((result) => (
                <InfoWindowContent result={result} filteredResults={this.props.filteredResults}/>
              ))}
            </ul>
          </section>
        </main>
      </div>
    )
  }
};

export default List;
