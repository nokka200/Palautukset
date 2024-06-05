import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const StrongText = ({ text }) => {
  return (
    <div><strong>{text}</strong></div>
  )
}

const Statistics = (props) => {

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <StatisticLine text='good' value={props.good} />
          </tr>
          <tr>
            <StatisticLine text='neutral' value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text='bad' value={props.bad} />
          </tr>
          <tr>
            <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
          </tr>
          <tr>
            <StatisticLine text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
          </tr>
          <tr>
            <StatisticLine text='positive' value={props.good / (props.good + props.neutral + props.bad) * 100} />
          </tr>

        </tbody>
      </table>
    </div>
  )
};

const StatisticLine = (props) => {
  let check = 0;

  if (props.value > 0) {
    check = 1;
  };
  switch (props.text) {
    case 'good':
      return (
        <td>{props.text} {props.value}</td>
      )
    case 'neutral':
      return (
        <td>{props.text} {props.value}</td>
      )
    case 'bad':
      return (
        <td>{props.text} {props.value}</td>
      )
    case 'all':
      if (check === 0) {
        return (
          <td>No feedback given</td>
        )
      } else {
        return (
          <td>{props.text} {props.value}</td>
        )
      };
    case 'average':
      if (check === 1) {
        return (
          <td>{props.text} {props.value}</td>
        )
      };
    case 'positive':
      if (check === 1) {
        return (
          <td>{props.text} {props.value}</td>
        )
      } else {
        return null;
      };
  };
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App


/*
const Stats = ({ value, name }) => {
  return (
    <div>{name} {value}</div>
  )
};



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
*/