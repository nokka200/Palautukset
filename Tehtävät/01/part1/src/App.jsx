const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>Varmaan syntynyt {bornYear()}</p>
    </div>
  )
}


const App = () => {
  const nimi = 'Pasi';
  const ika = 25;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name="Pekka" age={ika} />
    </div>
  )
}


export default App