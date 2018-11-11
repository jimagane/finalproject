
const api = 'https://api.yelp.com/v3/businesses'
const corsAnywhere = 'https://cors-anywhere.herokuapp.com'

const headers = {
  'Authorization': 'Bearer AgpD7vz7EYdCYFwh8VohSI8wbacKNkT9Jh_ctE-RlgQhLP0B7CkPavgJbWajjAcbCWB9EAgis-OsuMDgRY6z1pyzXQ4QrrhRwkOkzEQYxWkZ2ZDAqXIzSr71QDHCW3Yx'
}

export const getReviews = (locationId) =>
  fetch(`${corsAnywhere}/${api}/${locationId}/reviews`, {headers})
    .then(res => res.json())
    .then(data => data.reviews)

export const getBusinessInfo = (locationId) =>
  fetch(`${corsAnywhere}/${api}/${locationId}`, {headers})
    .then(res => res.json())
    .then(data => data)

export const loadYelpEmbedScript = () => {
  let container = document.getElementById('yelpReview');
  let scriptYelp = document.createElement('script');
  scriptYelp.src= "https://www.yelp.com/embed/widgets.js";
  scriptYelp.async= true;
  container.appendChild(scriptYelp);
}
