import React from 'react';
import './ListItem.css';

const ListItem = ({country, onCountryClicked}) => {

  const handleClick = function() {
    console.log("country clicked", country)
    onCountryClicked(country)
  }
  
  return <li onClick={handleClick}>{country.name.common}</li>
}

export default ListItem;