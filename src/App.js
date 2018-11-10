import React, { Component } from 'react';
import './App.css';
import Map from './map';
import List from './list';
import * as YelpAPI from './YelpAPI';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  state = {
    venues: [
      {
        title: 'Villa de Amore',
        location: {lat: 33.538770, lng: -117.068690},
        address: '40205 Calle Cabernet, Temecula, CA 92591',
        phone: '(951) 970-5831',
        url: 'http://villadeamore.com',
        rating: '4.7',
        price: '16000',
        reviews: [],
        info: '',
        id: 'y8DBzKXqy0nzgTPBw89bgg'
      },
      {
        title: 'Secluded Garden Estate',
        location: {lat: 33.413740, lng: -117.0868003},
        address: '38648 Pala-Temecula Rd, Pala, CA 92059',
        phone: '(760) 742-3100',
        url: 'http://secludedgardenestate.com',
        rating: '4.5',
        price: '3400',
        reviews: [],
        info: '',
        id: 'ypUdrtD3fGe0kU5IaQnSeA'
      },
      {
        title: 'Owl Creek Farms',
        location: {lat: 33.572370, lng: -116.930650},
        address: '37901 Sage Rd, Hemet, CA 92544',
        phone: '(410) 533-9081',
        url: 'https://owlcreekfarms.com/',
        rating: '3.5',
        price: '10000',
        reviews: [],
        info: '',
        id: 'iEHozPii1VYaHL7QHOK3Og'
      },
      {
        title: 'Monteleone Meadows',
        location: {lat: 33.607650, lng: -117.133680},
        address: '35245 Briggs Rd, Murrieta, CA 92563',
        phone: '(951) 677-6403',
        url: 'https://monteleonemeadows.com/',
        rating: '5.0',
        price: '9000',
        reviews: [],
        info: '',
        id: 'S5YSydq99nnll---vzi-vA'
      },
      {
        title: 'Wedgewood Weddings-Galway Downs',
        location: {lat: 33.487410, lng: -117.033960},
        address: '38801 Los Corralitos Rd, Temecula, CA 92592',
        phone: '(866) 966-3009',
        url: 'https://www.wedgewoodweddings.com/venues/southern-california/galway-downs',
        rating: '5.0',
        price: '11000',
        reviews: [],
        info: '',
        id: '6Xmhd44RbaDiDoegmjuH6Q'
      },
      {
        title: 'Mount Palomar Winery',
        location: {lat: 33.52638, lng: -117.07422},
        address: '33820 Rancho California Rd, Temecula, CA 92591',
        phone: '(951) 676-5047',
        url: 'https://www.mountpalomarwinery.com/',
        rating: '4.0',
        price: '8300',
        reviews: [],
        info: '',
        id: 'QhSHKkDGSkawp_QxSloq_g'
      },
      {
        title: 'Lorimar Winery',
        location: {lat: 33.5397679069828, lng: -117.058968856233},
        address: '39990 Anza Rd, Temecula, CA 92591',
        phone: '(951) 694-6699',
        url: 'https://www.lorimarwinery.com/',
        rating: '4.0',
        price: '11000',
        reviews: [],
        info: '',
        id: 'cfLGt932AJRHTBGf8_uZsw'
      },
      {
        title: 'Chapel of Memories',
        location: {lat: 33.4968797, lng: -117.1520152},
        address: '28300 Mercedes St, Temecula, CA 92590',
        phone: '(951) 265-7720',
        url: 'http://chapelofmemories.org/',
        rating: '4.0',
        price: '2400',
        reviews: [],
        info: '',
        id: '9Bs0a3sL8vaLWnllC2_nuA'
      },
      {
        title: 'Abbott Manor',
        location: {lat: 33.50258, lng: -117.13252},
        address: '40350 Camino Del Vino, Temecula, CA 92592',
        phone: '(951) 834-8406',
        url: 'https://www.abbottmanor.com/',
        rating: '5.0',
        price: '9000',
        reviews: [],
        info: '',
        id: '3UKrnJW2iq6f0drfo73UnQ'
      },
      {
        title: 'Chapel In The Vines',
        location: {lat: 33.494054, lng: -117.148554},
        address: '41955 Main St, Temecula, CA 92590',
        phone: '(951) 258-5599',
        url: 'http://www.chapelinthevines.com/',
        rating: '4.5',
        price: '400',
        reviews: [],
        info: '',
        id: 'De_mw0NexoKsBmWd-XcaXw'
      }
    ],
    map: null,
    filteredResults: [],
    markers: [],
    largeInfoWindow: {},
    bounds: {},
    ratingSelect: '0',
    priceSelect: '50000'
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
        this.setState({filteredResults: this.state.venues});
      });
    }
  }

  reloadReview = (id) => {
    for (let i = 0; i < this.state.venues.length; i++) {
      if (this.state.venues[i].id === id) {
        YelpAPI.getReviews(this.state.venues[i].id)
        .then(data => {
          // Code solution for updating single property of object in array via copying object and slicing, credit to Radosław Miernik, url: 'https://stackoverflow.com/questions/35174489/reactjs-setstate-of-object-key-in-array/35174579'
          let stateCopy = Object.assign({}, this.state);
          stateCopy.venues = stateCopy.venues.slice();
          stateCopy.venues[i] = Object.assign({}, stateCopy.venues[i]);
          stateCopy.venues[i].reviews = data;
          this.setState(stateCopy);
        });
      }
    }
  }

  loadMapsAPI = () => {
    let container = document.getElementById('app');
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
    let largeInfoWindow = new window.google.maps.InfoWindow();
    let bounds = new window.google.maps.LatLngBounds();
    this.setState({map: map, filteredResults: this.state.venues, largeInfoWindow: largeInfoWindow, bounds: bounds});
    this.loadMarkers(this.state.map, largeInfoWindow, bounds);
  }

  loadMarkers = (map, largeInfoWindow, bounds) => {
    window.populateInfoWindow = this.populateInfoWindow;
    window.scrollToList = this.scrollToList;

    let markers = this.state.markers;
    let venues = this.state.filteredResults;
    for (let i=0; i<venues.length; i++) {
      let labels = `${i+1} of ${venues.length}`;
      let position = venues[i].location;
      let title = venues[i].title;
      let address = venues[i].address;
      let id = venues[i].id;
      let marker = new window.google.maps.Marker({
        position: position,
        map: map,
        title: title,
        address: address,
        id: id,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        animation: window.google.maps.Animation.DROP
      });
      bounds.extend(marker.position);
      marker.addListener('click', function() {
        for (const marker of markers) {
          marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
        }
        window.populateInfoWindow(map, marker, largeInfoWindow);
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
        window.scrollToList(marker.id);
      });
      marker.addListener('mouseover', function() {
        if (this.icon === 'http://maps.google.com/mapfiles/ms/icons/red-dot.png') {
          this.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png')
        }
      });
      marker.addListener('mouseout', function() {
        if (this.icon === 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png') {
          this.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')
        }
      });
      markers.push(marker);
      map.fitBounds(bounds);
    };
  }

  populateInfoWindow = (map, marker, infowindow) => {
    let contentString = `<div class="infocontent" tabindex="0" aria-label="${marker.title}"><h3>${marker.title}</h3><h4>${marker.address}</h4></div>`;
    if (infowindow.marker !== marker) {
      infowindow.setContent('');
      infowindow.marker = marker;
      infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
      });
      infowindow.setContent(contentString);
      infowindow.open(map, marker);
    }
  }

  clearMarkers = (markers) => {
    for (let c=0; c<markers.length; c++) {
      markers[c].setMap(null);
    };
  }

  handleListClick = (result) => {
    let allMarkers = this.state.markers;
    for (const marker of allMarkers) {
      if (result.id === marker.id) {
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        window.setTimeout(function() {
          marker.setAnimation(null);
        }, 1200);
        this.populateInfoWindow(this.state.map, marker, this.state.largeInfoWindow);
      }
      if (result.id !== marker.id) {
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
      }
    }
  }

  scrollToList = (id) => {
    let item = document.getElementById(id);
    scrollToComponent(item);
  }

  selectRating = (value) => {
    let filteredResults = this.state.venues.filter((venue) => venue.rating >= Number(value));
    filteredResults = filteredResults.filter((venue) => venue.price <= Number(this.state.priceSelect));
    this.setState({ratingSelect: value, filteredResults: filteredResults});
  }

  selectPrice = (value) => {
    let filteredResults = this.state.venues.filter((venue) => venue.rating >= Number(this.state.ratingSelect));
    filteredResults = filteredResults.filter((venue) => venue.price <= Number(value));
    this.setState({priceSelect: value, filteredResults: filteredResults});
  }

  render() {
    return (
      <div className="App" id="app">
        <List venues={this.state.venues} filteredResults={this.state.filteredResults} selectRating={this.selectRating} selectPrice={this.selectPrice} ratingSelect={this.state.ratingSelect} priceSelect={this.state.priceSelect} handleListClick={this.handleListClick} reloadReview={this.reloadReview} />
        <div id="container">
          <Map map={this.state.map} markers={this.state.markers} largeInfoWindow={this.state.largeInfoWindow} bounds={this.state.bounds} loadMarkers={this.loadMarkers} clearMarkers={this.clearMarkers} />
        </div>
      </div>
    );
  }
}

export default App;
