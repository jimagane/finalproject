import React from 'react';

class Markers extends React.Component{

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

  createMarkers = () => {
    let markers = [];
    let defaultIcon = this.makeMarkerIcon('0091ff');
    let highlightedIcon = this.makeMarkerIcon('FFFF24');
    for (let i = 0; i < this.state.locations.length; i++) {
        let position = this.state.locations[i].location;
        let title = this.state.locations[i].title;
        let marker = new this.props.google.maps.Marker({
          position: position,
          title: title,
          animation: this.props.google.maps.Animation.DROP,
          icon: defaultIcon,
          id: i
        });
        marker.addListener('mouseover', function() {
          this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
          this.setIcon(defaultIcon);
        });
        markers.push(marker);
    };
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(this.props.map);
    }
  }

  makeMarkerIcon = (markerColor) => {
    let markerImage = new window.google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new this.props.google.maps.Size(21, 34),
          new this.props.google.maps.Point(0, 0),
          new this.props.google.maps.Point(10, 34),
          new this.props.google.maps.Size(21,34));
        return markerImage;
  }



  render() {
    return(
      <div>
      {this.createMarkers()}
      </div>
    )
  }
};

export default Markers;
