import React from 'react';

class Map extends React.Component {

  toggleClass = () => {
    let buttonMap = document.getElementById('mapButton');
    let listcontainer = document.getElementById('list-container');
    let mapcontainer = document.getElementById('container');
    if (buttonMap.innerText === 'Hide Map') {
      buttonMap.innerText = 'Show Map';
      buttonMap.style.bottom = '2%';
      listcontainer.style.paddingBottom = '0';
      mapcontainer.style.top = '100%';
    } else {
      buttonMap.innerText = 'Hide Map';
      buttonMap.style.bottom = '25%';
      listcontainer.style.paddingBottom = '50%';
      mapcontainer.style.top = '70%';
    }
  }

  render() {
    return (
      <div>
        <button id="mapButton" onClick={this.toggleClass}>Hide Map</button>
        <div id="map" role="application" aria-label="map of wedding venue locations">
          {this.props.clearMarkers(this.props.markers)}
          {this.props.loadMarkers(this.props.map, this.props.largeInfoWindow, this.props.bounds)}
        </div>
      </div>
    )
  }
};

export default Map;
