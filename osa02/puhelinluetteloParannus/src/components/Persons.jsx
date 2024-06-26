
const Persons = ({ personToSearch, personToDelete}) => {
    return (
        <ul>
        {personToSearch.map((person) => { 
          return <li key={person.name}>{person.name} : {person.number} <button onClick={() => personToDelete(person)}> Delete </button></li>
        }
      )}
      </ul>
    )
};



export default Persons;