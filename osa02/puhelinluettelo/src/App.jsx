import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '12345'}
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      phone: newNumber
    };

    if (checkName(newName)) {
      alert(`${newName} on jo luettelossa!`);
      setNewName('');
      setNewNumber('');
      return;
    }
    else {
      setPersons(persons.concat(personObject));
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
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form >
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => { 
          return <li key={person.name}>{person.name} : {person.phone}</li>
        }
      )}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )

}

export default App