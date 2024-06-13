import numberService from '../services/numbers';

const Persons = ({ personToSearch, setPerson, persons }) => {
    return (
        <ul>
        {personToSearch.map((person) => { 
          return <li key={person.name}>{person.name} : {person.phone} <button onClick={() => personToDel(person, setPerson, persons)}> Delete </button></li>
        }
      )}
      </ul>
    )
};

// ratkaisu ei ole paras mahdollinen, mutta toimii
const personToDel = (person, setPerson, persons) => {
  console.log('person', person)
  if (window.confirm(`Poistetaanko ${person.name}?`)) {
    numberService
      .remove(person.id)
      .then(response => { 
        console.log('response', response);
        setPerson(persons.filter(person => person.id !== response.id));
        window.alert(`Poistettiin ${person.name}`);
      });
  }
};

export default Persons;