import React from 'react';

class InfoWindow extends React.Component {

  componentDidMount() {
    this.loadYelpEmbedScript();
  }

  loadYelpEmbedScript = () => {
    let container = document.getElementById('yelpReview');
    let scriptYelp = document.createElement('script');
    scriptYelp.src= "https://www.yelp.com/embed/widgets.js";
    scriptYelp.async= true;
    container.appendChild(scriptYelp);
  }

// TODO: for each of state.filteredresults
// TODO: render to list: fill venue title, location, price, size img src and review id's
// TODO: render filtered markers
// TODO: if marker clicked, open InfoWindow
// TODO: if listitem clicked, bounce and highlight marker

  render() {
    return (
      <div id="infoContainer">
        <div id="venueDetails">
          <h3>venue title</h3>
            <p>location type</p>
            <p>price</p>
            <p>size</p>
        </div>
        <div id="yelpBox">
          <img id="yelpImage" src="/" alt="venue photo provided by Yelp website"></img>
          <div id="yelpReview">
            <span class="yelp-review" data-review-id="KNpcEBZXlF3n4C8STFi2vQ" data-hostname="www.yelp.com"></span>
            <span class="yelp-review" data-review-id="71D4WLyKu0Gd-vNXe-j7ag" data-hostname="www.yelp.com"></span>
            <span class="yelp-review" data-review-id="xJa7_lO5GDCBYR25yHN1BQ" data-hostname="www.yelp.com"></span>
          </div>
        </div>
      </div>
    )
  }
};

export default InfoWindow;
