import React from 'react';

class Map extends React.Component {

  state = {
    active: false
  }

  toggleClass = () => {
    const current = this.state.active;
    this.setState({active: !current});
    let buttonMap = document.getElementById('mapButton');
    let appcontainer = document.getElementById('app');
    let mapcontainer = document.getElementById('container');
    if (buttonMap.innerText === 'Hide Map') {
      buttonMap.innerText = 'Show Map';
      buttonMap.style.bottom = '2%';
      appcontainer.style.height = '100%';
      mapcontainer.style.top = '100%';
    } else {
      buttonMap.innerText = 'Hide Map';
      buttonMap.style.bottom = '25%';
      appcontainer.style.height = '70%';
      mapcontainer.style.top = '70%';
    }
  }

  render() {
    return (
      <div>
        <button id="mapButton" onClick={this.toggleClass}>Hide Map</button>
        <div id="map" role="application" aria-label="map of wedding venue locations" className={this.state.active ? 'hideMap' : null}>
          {this.props.clearMarkers(this.props.markers)}
          {this.props.loadMarkers(this.props.map, this.props.largeInfoWindow, this.props.bounds)}
        </div>
      </div>
    )
  }
};

export default Map;
