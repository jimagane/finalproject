import React from 'react';

class InfoWindowContent extends React.Component {

  componentDidMount() {
    this.loadYelpEmbedScript();
  }

  loadYelpEmbedScript = () => {
    let container = document.getElementById('yelpReview');
    let scriptYelp = document.createElement('script');
    scriptYelp.src= "https://www.yelp.com/embed/widgets.js";
    scriptYelp.async= true;
    container.appendChild(scriptYelp);
  }

// TODO: for each of state.filteredresults fill venue title, location, price, size img src and review id's
// TODO: bug! clear yelp reviews each time it rerenders

  render() {
    // if filterresults.length is 0 return no results found
    // if length>0
      // for (let a=0; a<this.props.filteredResults.length; i++) {
      //  return content below
      // }
      //if this.props.filteredResults[i].reviews == null return ...loading reviews
      //  else for (let b=0; i<this.props.filteredResults[b].reviews.length; i++)
      // return this.props.filteredResults[a].reviews[b].id

      // <p>{this.props.result.info.location.display_address}</p>
      // <p>{this.props.result.info.display_phone}/5</p>
    return (
      <div id="infoContainer">
        <div id="venueDetails">
          <a href={this.props.result.url}><h3>{this.props.result.title}</h3></a>

            <p>Rating: {this.props.result.info.rating}/5</p>
        </div>
        <div id="yelpBox">
          <img id="yelpImage" src={this.props.result.info.image_url} alt="venue, provided by Yelp website"></img>
          <div id="yelpReview">
            <span class="yelp-review" data-review-id={this.props.result.reviews[0].id} data-hostname="www.yelp.com"></span>
            <span class="yelp-review" data-review-id={this.props.result.reviews[1].id} data-hostname="www.yelp.com"></span>
            <span class="yelp-review" data-review-id={this.props.result.reviews[2].id} data-hostname="www.yelp.com"></span>
          </div>
        </div>
      </div>
    )
  }
};

export default InfoWindowContent;
