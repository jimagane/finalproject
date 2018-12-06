# WeddVenView: A Local Wedding Venue Finder

Search local wedding venues and filter by price and rating. View results in a list and see their locations on a map.

## Getting Started

WeddVenView final project can be cloned from github repository: https://github.com/jimagane/finalproject.git

### Prerequisites

App was created using ReactJS and create-react-app. To install create-react-app run `npm install -g create-react-app` in terminal.

To serve the app in build mode, run `npm install -g serve` in terminal.

Use text editor to edit any CSS or JS files in src folder. The index.html file in public folder is the template for the app and does not need to be modified.

### Installing and Usage

1. Clone program files from repository to run or edit.

2. In App.js file, line 148 replace `YOUR_GOOGLEMAPS_API_KEY_HERE` with your personal GoogleMaps API key to enable Google Maps API load.

3. In YelpAPI.js file, line 6 replace `YOUR_YELP_AUTHORIZATION_KEY_HERE` with your personal Yelp Fusion access key to enable Yelp Reviews load.

4. Run `npm install`, `npm run build` and `serve -s build` to view app.

5. Use browser to visit local site: http://localhost:5000

## Running Tests

Refresh the page to test updates to code. Be sure to clear the service workers and cached data to see updates, and enable `update on reload` option in chrome developer tools/application/service workers tab.

You can use Chrome Developer Tools - React Developer Tools to assist with development.

## Contributing

This repository is for Udacity Front-End Web Developer Nanodegree course. Therefore, will not be accepting pull requests at this time.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Dependencies

GoogleMaps API dependent on: https://maps.googleapis.com/maps/api/js?key=AIzaSyBAhV7AdJGxUzx4KdpKX8Q6GDrYmV3V4yw&v=3&callback=initMap

GoogleMaps icons dependent on:
http://maps.google.com/mapfiles/ms/icons/red-dot.png

http://maps.google.com/mapfiles/ms/icons/blue-dot.png

http://maps.google.com/mapfiles/ms/icons/yellow-dot.png

Yelp Reviews API dependent on:

Yelp Embedded Widget iframe dependent on:

Herokuapp cors anywhere dependent on:


create-react-app dependencies:
  - react and create-react-app dependencies
  - react-dom
  - react-scripts
  - react-scroll-to-component

## Acknowledgements

Project built using React and create-react-app. Create-react-app's built in service worker used to cache React project

GoogleMaps JavaScript API providing all map functions:

https://maps.googleapis.com/maps/api/js

Yelp Reviews used as 3rd party API data as well as Yelp's iframe format widget:

https://api.yelp.com/v3/businesses  https://www.yelp.com/embed/widgets.js

Use of Herokuapp to assist with access of API data (would normally be accessed through use of own server, but using Herokuapp for sake of demonstrating API use for Udacity class project):

https://cors-anywhere.herokuapp.com

Credit to Radosław Miernik for code solution in list.js: https://stackoverflow.com/questions/35174489/reactjs-setstate-of-object-key-in-array/35174579
