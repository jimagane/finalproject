import React from 'react';

class Map extends React.Component {

  clearMarkers = (markers) => {
    for (let c=0; c<this.props.markers.length; c++) {
      markers[c].setMap(null);
    }
  }

  render() {
    return (
      <div id="map">
        {this.clearMarkers(this.props.markers)}
        {this.props.loadMarkers(this.props.map)}
      </div>
    )
  }
};

export default Map;
