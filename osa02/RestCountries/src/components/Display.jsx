const Display = ({ filteredCountries }) => {


    if (filteredCountries.length > 10) {
        return (
            <>
                <div><strong>Too many matches, specify another filter</strong></div>
            </>
        );
    }
    else if (filteredCountries.length === 1) { 
        const targetCountry = filteredCountries[0];
        console.log('targetCountry', targetCountry)
        return (
            <>
                <h1><strong>{targetCountry.name.common}</strong></h1>
                <p>Capital: {targetCountry.capital}</p>
                <p>Area: {targetCountry.area}</p>
                <h2><strong>Languages:</strong></h2>
                <ul>
                    {Object.entries(targetCountry.languages).map(([key, value]) => {
                        return <li key={key}>{value}</li>
                    })}
                </ul>
                <div>
                    <img src={targetCountry.flags.png} alt={targetCountry.flags.alt}/>  
                </div>
                
            </>
        )
    } else { 
        return (
            <>
                {filteredCountries.map((countryName) => {
                    return <div key={countryName.name.common}>{countryName.name.common} <button>show</button> </div> // Pitä tehdä oma komponentti, jota tässä kutsumme, käytetään else if koodia siinä
                })}
            </>
        );
    };

};

export default Display;