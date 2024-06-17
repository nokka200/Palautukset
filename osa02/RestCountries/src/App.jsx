import { useState, useEffect } from 'react'
import countries from './services/countries'
import Search from './components/Search'

function App() {

  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState('');

  // Ladataan API tiedot, kun käyttäjä saapuu sivulle
  useEffect(() => { 
    countries
    .getAll()
    .then(response => {
      //console.log(response);
      setCountry(response);
    });
  }, []);

  if (country.length === 0) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  // Etsitään valtiot
  const filteredCountries = country.filter((countryName) => {
    return countryName.name.common.toLowerCase().includes(search.toLowerCase());
  });


  return (
    <>
      <Search setSearch={setSearch} />
      <br />
        {filteredCountries.map((countryName) => {
        return <div key={countryName.name.common}>{countryName.name.common}</div>
      })}

    </>
  )
}

export default App;


/*

<ul>
        Data: {country.map((countryName) => {
        return <li key={countryName.name.common}>{countryName.name.common}</li>
      })}
      </ul>
*/