import React from 'react';
// import InfoWindow from './infowindow';

class Map extends React.Component {

  state = {
    map: null
  }

  componentDidMount() {
    this.props.loadYelpAPI();
    window.initMap = this.initMap;
    this.props.loadMapsAPI();
  }

  componentDidUpdate() {
    this.loadMarkers(this.state.map);
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 33.503333, lng: -117.123611},
        zoom: 11
    });
    this.setState({map: map});
  }


  loadMarkers = (map) => {

    let largeInfowindow = new window.google.maps.InfoWindow();
    function populateInfoWindow(marker, infowindow) {
      let container = document.getElementById('container');
      let scriptYelp = document.createElement('script');
      scriptYelp.src= "https://www.yelp.com/embed/widgets.js";
      scriptYelp.async= true;
      container.appendChild(scriptYelp);

      if (infowindow.marker !== marker) {
        infowindow.setContent('');
        infowindow.marker = marker;
        infowindow.addListener('closeclick', function() {
          infowindow.marker = null;
        });
        infowindow.setContent(`<div id="infocontainer"><div id="infobox"><img id="yelpimage" src=${marker.info.photos[0]} alt="venue photo from yelp website">
          <div id="reviewbox"><span class="yelp-review" data-review-id="${marker.reviews[0].id}" data-hostname="www.yelp.com">Read<a href="https://www.yelp.com/user_details?userid=${marker.reviews[0].user.id}" rel="nofollow noopener">${marker.reviews[0].user.name}</a>'s<a href="https://www.yelp.com/biz/villa-de-amore-temecula?hrid=xJa7_lO5GDCBYR25yHN1BQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/y8DBzKXqy0nzgTPBw89bgg" rel="nofollow noopener">Villa de Amore</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a></span></div></div></div>`);


        infowindow.open(map, marker);
      }
    }
    // Create markers for each venue


    let markers = [];

    for (let i = 0; i < this.props.filteredResults.length; i++) {
      let position = this.props.filteredResults[i].location;
      let title = this.props.filteredResults[i].title;
      let info = this.props.filteredResults[i].info;
      let reviews = this.props.filteredResults[i].reviews;
      let id = this.props.filteredResults[i].id;
      let marker = new window.google.maps.Marker({
        position: position,
        title: title,
        info: info,
        reviews: reviews,
        map: map,
        animation: window.google.maps.Animation.DROP,
        id: id
      });
      marker.addListener('click', function() {
        populateInfoWindow(this, largeInfowindow)
      });
      markers.push(marker);
console.log(markers);
    }
  }

  render() {

    return (
      <div id="map">

      </div>
    )
  }
};

export default Map;
