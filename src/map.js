import React from 'react';
import InfoWindowContent from './infowindowcontent';
import { renderToString } from 'react-dom/server'

class Map extends React.Component {

  state = {
    map: null
  }

  componentDidMount() {
    this.props.loadYelpAPI();
    window.initMap = this.initMap;
    this.props.loadMapsAPI();
  }

  componentDidUpdate() {
    this.loadMarkers(this.state.map);
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 33.503333, lng: -117.123611},
        zoom: 11
    });
    this.setState({map: map});
    this.props.populateInitMap();
  }

// TODO: rendre markers for each of filterd results


  // TODO: if marker clicked, open InfoWindow
  loadMarkers = (map) => {
    let largeInfowindow = new window.google.maps.InfoWindow();
    function populateInfoWindow(marker, infowindow) {
      let a = renderToString(<InfoWindowContent result={marker}/>);

      if (infowindow.marker !== marker) {
        infowindow.setContent('');
        infowindow.marker = marker;
        infowindow.addListener('closeclick', function() {
          infowindow.marker = null;
        });

        infowindow.setContent(a);


        infowindow.open(map, marker);
      }
    }
    // Create markers for each venue

    function loadYelpEmbedScript()  {
      let container = document.getElementById('yelpReview');
      let scriptYelp = document.createElement('script');
      scriptYelp.src= "https://www.yelp.com/embed/widgets.js";
      scriptYelp.async= true;
      container.appendChild(scriptYelp);
    }
    let markers = [];

    for (let i = 0; i < this.props.filteredResults.length; i++) {
      let position = this.props.filteredResults[i].location;
      let title = this.props.filteredResults[i].title;
      let info = this.props.filteredResults[i].info;
      let reviews = this.props.filteredResults[i].reviews;
      let id = this.props.filteredResults[i].id;
      let marker = new window.google.maps.Marker({
        position: position,
        title: title,
        info: info,
        reviews: reviews,
        map: map,
        animation: window.google.maps.Animation.DROP,
        id: id
      });
      marker.addListener('click', function() {
        loadYelpEmbedScript();
        populateInfoWindow(this, largeInfowindow)
      });
      markers.push(marker);
console.log(markers);
    }
  }

  render() {

    return (
      <div id="map">
      </div>
    )
  }
};

export default Map;
