import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import numberService from './services/numbers';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data);
      })
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      phone: newNumber
    };

    if (checkName(newName)) {
      setErrorMessage(`${newName} on jo luettelossa!`);
      setNewName('');
      setNewNumber('');
      setTimeout(() => { 
        setErrorMessage(null);
      }, 2000);
      return;
    }
    else {
      //setPersons(persons.concat(personObject));
      numberService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response));
        });
      setNewName('');
      setNewNumber('');
    }
    
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const checkName = (name) => {
    return persons.find(person => person.name === name);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const personToSearch = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />

      <Filter handleSearch={handleSearch} search={search} />
      
      <h2>add a new</h2>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />

      <h2>Numbers</h2>

      <Persons personToSearch={personToSearch} setPerson={setPersons} persons={persons}/>

    </div>
  )

}

export default App