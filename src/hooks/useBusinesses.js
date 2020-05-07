import { useState, useEffect } from 'react';
import yelp from '../api/yelp';



export default function() {

  const[businesses, setBusinesses] = useState([]);
  const[errorMessage, setErrorMessage] = useState('');

  
  async function SearchApi(searchTerm) {
    try {
      const response = await yelp.get('/search', {
        params: {
          location: 'orange county', 
          term: searchTerm, // (*yelp's parameter*) term: term (*the state*) === term,
          limit: 50,
        }
      });
      return setBusinesses(response.data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong!');
    }
  }


  useEffect(() => {SearchApi('pasta')}, []);
  
  
  return [ SearchApi, businesses, errorMessage ];

}