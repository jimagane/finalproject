import React from 'react';

class Map extends React.Component {

  render() {
    return (
      <div>
        <button id="mapButton" className="showMap">Hide Map</button>
        <div id="map">
          {this.props.clearMarkers(this.props.markers)}
          {this.props.loadMarkers(this.props.map, this.props.largeInfoWindow, this.props.bounds)}
        </div>
      </div>
    )
  }
};

export default Map;
