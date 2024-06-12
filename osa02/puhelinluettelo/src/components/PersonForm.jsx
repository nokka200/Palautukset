const PersonForm = ({addPerson, newName, newNumber, handleNameChange, handlePhoneChange}) => {
    const nameValue = newName;
    const phoneValue = newNumber;

    return (
        <form onSubmit={addPerson}>
            <div>
            name: <input value={nameValue} onChange={handleNameChange}/>
            </div>
            <div>
            number: <input value={phoneValue} onChange={handlePhoneChange}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
      </form >
    )
};

export default PersonForm;