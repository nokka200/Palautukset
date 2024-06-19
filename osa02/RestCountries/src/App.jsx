import { useState, useEffect } from 'react'
import countries from './services/countries'
import Search from './components/Search'
import Display from './components/Display';

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
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
    });
  }, []);

  if (country.length === 0) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  //console.log('country', country[0]);

  // Etsitään valtiot
  const filteredCountries = country.filter((countryName) => {
    return countryName.name.common.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Search setSearch={setSearch} />
      <br />

      
      <Display filteredCountries={filteredCountries} />

    </>
  )
}

export default App;


/*

*/