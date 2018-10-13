import React, { Component } from 'react';
import './App.css';
import Map from './map';
import List from './list';

class App extends Component {
  state = {
    locations: [
      {title: 'Villa de Amore',
      location: {lat: 33.538770, lng: -117.068690},
      reviews: 'a'},
      {title: 'Secluded Garden Estate',
      location: {lat: 33.413740, lng: -117.0868003},
      reviews: 'a'},
      {title: 'Owl Creek Farms',
      location: {lat: 33.572370, lng: -116.930650},
      reviews: 'a'},
      {title: 'Monteleone Meadows',
      location: {lat: 33.607650, lng: -117.133680},
      reviews: 'a'},
      {title: 'Wedgewood Weddings',
      location: {lat: 33.487410, lng: -117.033960},
      reviews: 'a'},
    ]
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
      <div className="App">
        <div id="container">
          <List locations={this.state.locations} />
          <Map locations={this.state.locations} loadAPI={this.loadAPI}/>
        </div>
      </div>
    );
  }
}

export default App;
