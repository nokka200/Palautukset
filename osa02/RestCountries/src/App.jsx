import { useState } from 'react'
import countries from '../services/countries'

function App() {

  countries
    .getAll()
    .then(response => {
      console.log(response);
    });

  return (
    <>
      <p>find countries <input type="text" /></p>
    </>
  )
}

export default App
