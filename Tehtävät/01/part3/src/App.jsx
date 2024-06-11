import { useState } from 'react';
//Monimutkaisempi tila https://fullstackopen.com/osa1/monimutkaisempi_tila_reactin_debuggaus
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    const updatedLeft = left + 1;
    console.log('left before', left);
    setLeft(updatedLeft);
    console.log('left after', left);
    setTotal(updatedLeft + right);
  };


  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
    setTotal(left + right);
  };

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

export default App;
