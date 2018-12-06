
const api = 'https://api.yelp.com/v3/businesses'
const corsAnywhere = 'https://cors-anywhere.herokuapp.com'

const headers = {
  'Authorization': 'Bearer YOUR_YELP_AUTHORIZATION_KEY_HERE'
}

export const getReviews = (locationId) =>
  fetch(`${corsAnywhere}/${api}/${locationId}/reviews`, {headers})
    .then(res => res.json())
    .then(data => data.reviews)

export const getBusinessInfo = (locationId) =>
  fetch(`${corsAnywhere}/${api}/${locationId}`, {headers})
    .then(res => res.json())
    .then(data => data)
