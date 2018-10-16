import React from 'react';

class List extends React.Component {

  state = {
    itemlist: []
  }

  componentDidMount() {

  }

  componentDidUpdate() {
  }

  populateListItems = () => {

    const ul = document.getElementById("venues-list");
    ul.empty()
      this.props.venues.forEach(venue => {
        ul.append(this.createVenueHTML(venue));
      });


  }

  createVenueHTML = (venue) => {
  const li = document.createElement('li');

    const more = document.createElement('a');
    more.innerHTML = venue.title;
    li.append(more);

    const location = document.createElement('p');
    location.innerHTML = venue.location;
    li.append(location);

    const reviews = document.createElement('p');
    reviews.innerHTML = venue.reviews;
    li.append(reviews);
console.log(li)
  return li
}

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
              <option value="3">**</option>
              <option value="4">***</option>
              <option value="5">****</option>
            </select>
          </nav>
        </header>

        <main id="maincontent">
          <section id="list-container">
            <h3>Results:</h3>
            <ul id="venues-list">
            </ul>
          </section>
        </main>
      </div>
    )
  }
};

export default List;
