const Persons = ({personToSearch}) => {
    return (
        <ul>
        {personToSearch.map((person) => { 
          return <li key={person.name}>{person.name} : {person.phone}</li>
        }
      )}
      </ul>
    )
};

export default Persons;