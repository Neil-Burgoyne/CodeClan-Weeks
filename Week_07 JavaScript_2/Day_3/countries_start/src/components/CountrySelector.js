import React from 'react';

const CountrySelector = ({countries, onCountrySelected}) => {  
    
    const countryOptions = countries.map((country, index) => {
      return <option value={index} key={index}>{country.name.common}</option>
    })

const handleChange = function(evt) {
        onCountrySelected(evt.target.value);
    }

    return (
        <select onChange={handleChange}>
            <option value="" selected>What country do you want? </option>
            {countryOptions}
        </select>
    )
}

export default CountrySelector;