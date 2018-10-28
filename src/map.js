import React from 'react';

class Map extends React.Component {

  render() {
    return (
      <div id="map">
        {this.props.clearMarkers(this.props.markers)}
        {this.props.loadMarkers(this.props.map, this.props.largeInfoWindow, this.props.bounds)}
      </div>
    )
  }
};

export default Map;
