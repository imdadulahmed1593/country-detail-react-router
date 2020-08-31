import React from 'react'
import './Home.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'

function Home() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => alert(error.message))
    }, [])
    // const { id } = useParams();
    let history = useHistory();

    function handleClick(country) {
        history.push(`/country/${country}`);
    }

    return (

        <div className="home">
            {
                countries.map(country => {
                    return (
                        <div className="short__details">
                            <h2>{country.name}</h2>
                            <h3>Subregion:{country.subregion}</h3>
                            <Link to={`/country/${country.name}`}><p>Find Details</p></Link>
                            <button onClick={() => handleClick(country.name)}>Click Here</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Home
