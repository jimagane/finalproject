import React from 'react';

class Map extends React.Component {

  componentDidMount() {
    window.initMap = this.initMap;
    this.props.loadAPI();
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
    
    for (let i = 0; i < this.props.locations.length; i++) {
      let position = this.props.locations[i].location;
      let title = this.props.locations[i].title;
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

  render() {
    return (
      <div id="map"></div>
    )
  }
};

export default Map;
