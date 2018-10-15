import React, { Component } from 'react';
import './App.css';
import Map from './map';
import List from './list';
import * as YelpAPI from './YelpAPI';

class App extends Component {
  state = {
    venues: [
      {
        id: 'y8DBzKXqy0nzgTPBw89bgg',
        title: 'Villa de Amore',
        location: {lat: 33.538770, lng: -117.068690},
        reviews: '...loading reviews'
      },
      {
        id: 'ypUdrtD3fGe0kU5IaQnSeA',
        title: 'Secluded Garden Estate',
        location: {lat: 33.413740, lng: -117.0868003},
        reviews: '...loading reviews'
      },
      {
        id: 'iEHozPii1VYaHL7QHOK3Og',
        title: 'Owl Creek Farms',
        location: {lat: 33.572370, lng: -116.930650},
        reviews: '...loading reviews'
      },
      {
        id: 'S5YSydq99nnll---vzi-vA',
        title: 'Monteleone Meadows',
        location: {lat: 33.607650, lng: -117.133680},
        reviews: '...loading reviews'
      },
      {
        id: '6Xmhd44RbaDiDoegmjuH6Q',
        title: 'Wedgewood Weddings',
        location: {lat: 33.487410, lng: -117.033960},
        reviews: '...loading reviews'
      },
    ]
  }

  loadReviews = (id) => {
    YelpAPI.getReviews(id)
    .then(data => {
    let venues = this.state.venues;
    for (const venue of venues) {
      if (venue.id === id) {
        let x = venues.indexOf(venue);
        // Code solution for updating single property of object in array via copying object and slicing, credit to Radosław Miernik, url: 'https://stackoverflow.com/questions/35174489/reactjs-setstate-of-object-key-in-array/35174579'
        let stateCopy = Object.assign({}, this.state);
        stateCopy.venues = stateCopy.venues.slice();
        stateCopy.venues[x] = Object.assign({}, stateCopy.venues[x]);
        stateCopy.venues[x].reviews = data;
        this.setState(stateCopy);
        console.log(this.state.venues[x])
      }
    }
  })
  }



  loadMapsAPI = () => {
    let container = document.getElementById('container');
    let script = document.createElement('script');
    script.src= "https://maps.googleapis.com/maps/api/js?key=AIzaSyBAhV7AdJGxUzx4KdpKX8Q6GDrYmV3V4yw&v=3&callback=initMap";
    script.async= true;
    script.defer= true;
    container.appendChild(script);
  }

  loadYelpAPI = () => {
    for (let i = 0; i < this.state.venues.length; i++) {
      YelpAPI.getReviews(this.state.venues[i].id)
      .then(data => {
        // Code solution for updating single property of object in array via copying object and slicing, credit to Radosław Miernik, url: 'https://stackoverflow.com/questions/35174489/reactjs-setstate-of-object-key-in-array/35174579'
        let stateCopy = Object.assign({}, this.state);
        stateCopy.venues = stateCopy.venues.slice();
        stateCopy.venues[i] = Object.assign({}, stateCopy.venues[i]);
        stateCopy.venues[i].reviews = data;
        this.setState(stateCopy);
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div id="container">
          <List venues={this.state.venues} />
          <Map venues={this.state.venues} loadMapsAPI={this.loadMapsAPI} loadYelpAPI={this.loadYelpAPI} />
        </div>
      </div>
    );
  }
}

export default App;
