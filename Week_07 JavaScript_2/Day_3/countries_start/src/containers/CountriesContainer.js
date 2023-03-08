import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import './CountriesContainer.css';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      getCountries();
    }, [])

    const getCountries = async function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(jsonData => setCountries(jsonData))
    }





    return (
        <div className="main-container">
            <CountryList countries={countries} />
        </div>
    )
}

export default CountryContainer;
