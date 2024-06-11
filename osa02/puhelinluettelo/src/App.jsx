import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

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
      <div>
        filter shown with <input onChange={handleSearch} value={search}/>
      </div>
      <h2>add a new</h2>
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
        {personToSearch.map((person) => { 
          return <li key={person.name}>{person.name} : {person.phone}</li>
        }
      )}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )

}

export default App