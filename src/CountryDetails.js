import React from "react";
import "./CountryDetails.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${id}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]))
      .catch((error) => alert(error.message));
  }, []);

  const { name, flag, region, subregion, population } = country;
  //   currencies.map((cr) => {
  //     const { code, name, symbol } = cr;
  //     return cr;
  //   });
  const currency = country.currencies && country.currencies[0].name;
  console.log(currency);

  return (
    <div className="countryDetails">
      <img className="country__flag" src={flag} alt="" />
      <h1>{name}</h1>
      <h2>region: {region}</h2>
      <h2>subregion: {subregion}</h2>
      <h2>population: {population}</h2>
      <h2>currency: {currency}</h2>
    </div>
  );
}

export default CountryDetails;
