import React, { useState } from 'react';
import 'C:/react-project/first-project/src/Style.css'
const Country = ({country, handleVisitedCountries, handleFlag}) => {

const [visited, setVisited] = useState(false)

    const handleVisited = ()=>{
      
       setVisited(!visited)
       handleVisitedCountries(country)

    }
    return (
        <div className={`count  ${visited && `country-visited`}`}>
       

            <img src={country.flags.flags.png} alt="" />
            <h3>country {country.name.common}</h3>
          <p>population:  {country.population.population}</p>
          <p>country code: {country.ccn3.ccn3}</p>
          <p>Area: {country.area.area}{
            country.area.area > 300000 ? '  Big country':  '  small country'}</p>
            <button onClick={handleVisited}>
            {visited ? 'visited': 'not visited'}
            </button>
            <button onClick={()=>{ handleFlag(country.flags.flags.png)}}>add flag</button>
        </div>
    );
};

export default Country;