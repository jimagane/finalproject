import React from 'react';

class Map extends React.Component {

  state = {
    locations: [
      {title: 'Villa de Amore',
      location: {lat: 33.538770, lng: -117.068690}},
      {title: 'Secluded Garden Estate',
      location: {lat: 33.413740, lng: -117.0868003}},
      {title: 'Owl Creek Farms',
      location: {lat: 33.572370, lng: -116.930650}},
      {title: 'Monteleone Meadows',
      location: {lat: 33.607650, lng: -117.133680}},
      {title: 'Wedgewood Weddings',
      location: {lat: 33.487410, lng: -117.033960}}
    ]
  }

  componentDidMount() {
    window.initMap = this.initMap;
    this.loadAPI();
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 33.503333, lng: -117.123611},
        zoom: 11
    });
    let largeInfowindow = new window.google.maps.InfoWindow();
    function populateInfoWindow(marker, infowindow) {
      if (infowindow.marker !== marker) {
        infowindow.setContent('');
        infowindow.marker = marker;
        infowindow.addListener('closeclick', function() {
          infowindow.marker = null;
        });
        infowindow.setContent('<div>' + marker.title + '</div>');
        infowindow.open(map, marker);
      }
    }
    for (let i = 0; i < this.state.locations.length; i++) {
      let position = this.state.locations[i].location;
      let title = this.state.locations[i].title;
      let marker = new window.google.maps.Marker({
        position: position,
        title: title,
        map: map,
        animation: window.google.maps.Animation.DROP,
        id: i
      });
      marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
          });
    }
  }

  loadAPI = () => {
    let container = document.getElementById('container');
    let script = document.createElement('script');
    script.src= "https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing&key=AIzaSyBAhV7AdJGxUzx4KdpKX8Q6GDrYmV3V4yw&v=3&callback=initMap";
    script.async= true;
    script.defer= true;
    container.appendChild(script);
  }

  render() {
    return (
      <div id="container">
        <div id="map"></div>
      </div>
    )
  }
};

export default Map;
