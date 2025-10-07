import React, { use, useState } from 'react';
import 'C:/react-project/first-project/src/Style.css'
import Country from '../Country';
const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries]= useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleFlag=(flag)=>{
        const newFlags = [...visitedFlags, flag]
        setVisitedFlags(newFlags)
    }
    const handleVisitedCountries = (country)=>{
           
            const newVisitedCountries = [...visitedCountries, country]
            setVisitedCountries(newVisitedCountries)
    }
    const countriey = use(countriesPromise)
    const countriesd = countriey.countries
    return (
        <div>
            <h1>set the countries:{countriesd.length}</h1>
<h3>Total country visited : {visitedCountries.length}</h3>
<h3>total flag visited {visitedFlags.length}</h3>
<ol>{
   visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
}</ol>
<div className='container'>
    {
        visitedFlags.map((flag, index )=> <img key={index} src={flag}></img>)
    }
</div>
            <div  className='countries'>
        {countriesd.map( country => <Country country = {country} handleVisitedCountries= {handleVisitedCountries} handleFlag={handleFlag}></Country>)}
          </div>
        </div>
    );
};

export default Countries;