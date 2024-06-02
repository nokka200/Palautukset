import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const Stats = ({ value, name }) => {
  return (
    <div>{name} {value}</div>
  )
};

const StrongText = ({ text }) => {
  return (
  <div>
      <p><strong>{text}</strong></p>
  </div>
  )

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <StrongText text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <StrongText text='statistics' />
      <Stats value={good} name='good' />
      <Stats value={neutral} name='neutral' />
      <Stats value={bad} name='bad' />
    </div>
  )
}

export default App