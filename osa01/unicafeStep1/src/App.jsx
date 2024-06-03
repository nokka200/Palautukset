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
      <div><strong>{text}</strong></div>
  )
}

const ShowAll = ({ good, neutral, bad }) => {
  return (
      <div>all {good + neutral + bad}</div>
  )
};

const ShowAverage = ({ good, neutral, bad }) => {
  return (
      <div>average {(good - bad) / (good + neutral + bad)}</div>
  )
};

const ShowPositive = ({ good, neutral, bad }) => { 
  return (
      <div>positive {good / (good + neutral + bad) * 100} %</div>
  )
}

const Statistics = ({ good, neutral, bad}) => {

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  else {
    return (
      <div>
        <ShowAll good={good} neutral={neutral} bad={bad} />
        <ShowAverage good={good} neutral={neutral} bad={bad} />
        <ShowPositive good={good} neutral={neutral} bad={bad} />
      </div>
    )
  }
};

const App = () => {
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App