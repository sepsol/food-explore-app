import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer upNb0hs6PAP6JbrSAg5-WMNGKWxC347bt7ssxFCcEUUJxEeiE2mBY-NSbpeOf2HXHDpKQCooKQGiNKTkQ-uqIUMekdDocsBXSnHcSd_95Q9VlI4CVWXV-jEFwZSxXnYx'
  }
});