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

        return (
            <>
                <h1><strong>{targetCountry.name.common}</strong></h1>
                <p>Capital: </p>
                <p>Area: </p>
            </>
        )
    } else { 
        return (
            <>
                {filteredCountries.map((countryName) => {
                    return <div key={countryName.name.common}>{countryName.name.common}</div>
                })}
            </>
        );
    };

};

export default Display;