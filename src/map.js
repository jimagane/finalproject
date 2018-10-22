import React from 'react';
import Marker from './marker';

class Map extends React.Component {

  clearMarkers = (markers) => {
    for (let c=0; c<this.props.markers.length; c++) {
      markers[c].setMap(null);
    }
  }



  render() {
    return (
      <div id="map">
        {this.props.filteredResults.map((result) => (
          <Marker key={result.id} result={result} map={this.props.map}/>
        ))}
        {this.clearMarkers(this.props.markers)}
        {this.props.loadMarkers(this.props.map)}
      </div>
    )
  }
};

export default Map;
