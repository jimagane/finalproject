import React, { Component } from 'react';
import './App.css';
import Map from './map';
import List from './list';
import * as YelpAPI from './YelpAPI';
import InfoWindowContent from './infowindowcontent';
import { renderToString } from 'react-dom/server';

class App extends Component {
  state = {
    venues: [
      {
        id: 'y8DBzKXqy0nzgTPBw89bgg',
        title: 'Villa de Amore',
        location: {lat: 33.538770, lng: -117.068690},
        reviews: '...loading reviews',
        info: {
        rating: '1'},
        locationType: 'private',
        price: '16000',
        url: 'http://villadeamore.com'
      },
      {
        id: 'ypUdrtD3fGe0kU5IaQnSeA',
        title: 'Secluded Garden Estate',
        location: {lat: 33.413740, lng: -117.0868003},
        reviews: '...loading reviews',
        info: {
        rating:'1'},
        locationType: 'private',
        price: '3400',
        url: 'http://secludedgardenestate.com'
      },
      {
        id: 'iEHozPii1VYaHL7QHOK3Og',
        title: 'Owl Creek Farms',
        location: {lat: 33.572370, lng: -116.930650},
        reviews: '...loading reviews',
        info: {
        rating:'2'},
        locationType: 'private',
        price: '10000',
        url: 'https://owlcreekfarms.com/'
      },
      {
        id: 'S5YSydq99nnll---vzi-vA',
        title: 'Monteleone Meadows',
        location: {lat: 33.607650, lng: -117.133680},
        reviews: '...loading reviews',
        info: {rating:'2'},
        locationType: 'private',
        price: '9000',
        url: 'https://monteleonemeadows.com/'
      },
      {
        id: '6Xmhd44RbaDiDoegmjuH6Q',
        title: 'Wedgewood Weddings-Galway Downs',
        location: {lat: 33.487410, lng: -117.033960},
        reviews: '...loading reviews',
        info: {rating:'3'},
        locationType: 'private',
        price: '11000',
        url: 'https://www.wedgewoodweddings.com/venues/southern-california/galway-downs'
      },
      {
        id: 'QhSHKkDGSkawp_QxSloq_g',
        title: 'Mount Palomar Winery',
        location: {lat: 33.52638, lng: -117.07422},
        reviews: '...loading reviews',
        info: {rating:'3'},
        locationType: 'winery',
        price: '8300',
        url: 'https://www.mountpalomarwinery.com/'
      },
      {
        id: 'cfLGt932AJRHTBGf8_uZsw',
        title: 'Lorimar Winery',
        location: {lat: 33.5397679069828, lng: -117.058968856233},
        reviews: '...loading reviews',
        info: {rating:'4'},
        locationType: 'winery',
        price: '11000',
        url: 'https://www.lorimarwinery.com/'
      },
      {
        id: '9Bs0a3sL8vaLWnllC2_nuA',
        title: 'Chapel of Memories',
        location: {lat: 33.4968797, lng: -117.1520152},
        reviews: '...loading reviews',
        info: {rating: '4'},
        locationType: 'church',
        price: '2400',
        url: 'http://chapelofmemories.org/'
      },
      {
        id: '3UKrnJW2iq6f0drfo73UnQ',
        title: 'Abbott Manor',
        location: {lat: 33.50258, lng: -117.13252},
        reviews: '...loading reviews',
        info: {rating:'5'},
        locationType: 'private',
        price: '9000',
        url: 'https://www.abbottmanor.com/'
      },
      {
        id: 'De_mw0NexoKsBmWd-XcaXw',
        title: 'Chapel In The Vines',
        location: {lat: 33.494054, lng: -117.148554},
        reviews: '...loading reviews',
        info: {rating:'5'},
        locationType: 'church',
        price: '400',
        url: 'http://www.chapelinthevines.com/'
      }
    ],
    map: null,
    markers: [],
    filteredResults: [],
    ratingSelect: '0',
    priceSelect: '50000',
    locationSelect: ''
  }

  componentDidMount() {
    // this.loadYelpAPI();
    window.initMap = this.initMap;
    this.loadMapsAPI();
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
      });
      YelpAPI.getBusinessInfo(this.state.venues[i].id)
      .then(data => {
        // Code solution for updating single property of object in array via copying object and slicing, credit to Radosław Miernik, url: 'https://stackoverflow.com/questions/35174489/reactjs-setstate-of-object-key-in-array/35174579'
        let stateCopy = Object.assign({}, this.state);
        stateCopy.venues = stateCopy.venues.slice();
        stateCopy.venues[i] = Object.assign({}, stateCopy.venues[i]);
        stateCopy.venues[i].info = data;
        this.setState(stateCopy);
      });
    }
  }

  loadMapsAPI = () => {
    let container = document.getElementById('container');
    let script = document.createElement('script');
    script.src= "https://maps.googleapis.com/maps/api/js?key=AIzaSyBAhV7AdJGxUzx4KdpKX8Q6GDrYmV3V4yw&v=3&callback=initMap";
    script.async= true;
    script.defer= true;
    container.appendChild(script);
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 33.503333, lng: -117.123611},
        zoom: 11
    });
    this.setState({map: map, filteredResults: this.state.venues});
this.loadMarkers(this.state.map);
  }


  loadMarkers = (map) => {
    let markers =[];
    markers = this.state.markers;
    for (let i = 0; i < this.state.filteredResults.length; i++) {
      let position = this.state.filteredResults[i].location;
      let title = this.state.filteredResults[i].title;
      let info = this.state.filteredResults[i].info;
      let reviews = this.state.filteredResults[i].reviews;
      let id = this.state.filteredResults[i].id;
      let marker = new window.google.maps.Marker({
        position: position,
        title: title,
        info: info,
        reviews: reviews,
        map: map,
        animation: window.google.maps.Animation.DROP,
        id: id
      });
      markers.push(marker);
    }
  }



  selectRating = (value) => {
    let filteredResults = this.state.venues.filter((venue)=> venue.info.rating >= value);
    filteredResults = filteredResults.filter((venue)=> venue.price<= Number(this.state.priceSelect));
    this.setState({ratingSelect: value, filteredResults: filteredResults});


  }

  selectPrice = (value) => {
    let filteredResults = this.state.venues.filter((venue)=> venue.info.rating >= this.state.ratingSelect);
    filteredResults = filteredResults.filter((venue)=> venue.price<= Number(value));
    this.setState({priceSelect: value, filteredResults: filteredResults});


  }

  render() {
    return (
      <div className="App">
        <div id="container">
          <List filteredResults={this.state.filteredResults} selectRating={this.selectRating} selectPrice={this.selectPrice} ratingSelect={this.state.ratingSelect} priceSelect={this.state.priceSelect} />
          <Map filteredResults={this.state.filteredResults} markers={this.state.markers} loadMarkers={this.loadMarkers} loadMapsAPI={this.loadMapsAPI} loadYelpAPI={this.loadYelpAPI} map={this.state.map}/>
        </div>
      </div>
    );
  }
}

export default App;
