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
  const [successMessage, setsuccessMessage,] = useState(null)

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/api/persons')
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data);
      })
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };

    if (checkName(newName)) {
      setNewName('');
      setNewNumber('');
      if (window.confirm(`Päivitetäänkö ${newName}?`)) {
        numberService
          .update(checkName(newName).id, personObject)
          .then(returnedName => {
            setPersons(persons.map(person => person.id !== returnedName.id ? person : returnedName));
            setsuccessMessage(`Henkilön ${newName} numero päivitetty!`);
            setTimeout(() => {
              setsuccessMessage(null);
            }, 2000);
          })
          .catch(error => {
            setErrorMessage(`Henkilön ${newName} numeroa ei voitu päivittää, joku virhe`);
            setTimeout(() => {
              setErrorMessage(null);
            }, 2000);
          });
      };
    }
    else {
      numberService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response));
        });
      setsuccessMessage(`Lisätty tietokantaan ${newName}`);
      setNewName('');
      setNewNumber('');

      setTimeout(() => {
        setsuccessMessage(null);
      }, 2000);
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

  const personToDel = (del) => {
    console.log('personToDel', del);
    if (window.confirm(`Poistetaanko ${del.name}?`)) {
      numberService
        .remove(del.id)
        .then(response => {
          console.log('response', response);
          setPersons(persons.filter(person => person.id !== del.id));
          setsuccessMessage(`Poistettiin ${del.name}`);
          setTimeout(() => {
            setsuccessMessage(null);
          }, 2000)
        })
        .catch(error => {
          setErrorMessage(`Henkilö ${del.name} on jo poistettu`);
          console.log('error', error.response.data.error);
          setTimeout(() => {
            setErrorMessage(null);
          }, 2000)
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} clsName={"error"} />
      <Notification message={successMessage} clsName={"success"} />

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

      <Persons personToSearch={personToSearch} personToDelete={personToDel} />

    </div>
  )

}

export default App