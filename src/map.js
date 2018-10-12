import React from 'react';

class Map extends React.Component {

  componentDidMount() {
    window.initMap = this.initMap;
    this.loadAPI();
  }

  initMap = () => {
    new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 33.503333, lng: -117.123611},
        zoom: 11
    });
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
