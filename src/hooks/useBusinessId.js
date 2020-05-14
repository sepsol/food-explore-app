import { useState } from 'react';
import yelp from '../api/yelp';



export default function() {
  
  const [businessDetails, setBusinessDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  async function GetBusinessDetails(id) {

    try {
      setErrorMessage('');
      const response = await yelp.get(`/${id}`);
      return setBusinessDetails(response.data);
      
    } catch (err) {
      setErrorMessage(`Something went wrong! :(\n${err}`);
    }
  }
  
  return [ GetBusinessDetails ,businessDetails, errorMessage ];
}