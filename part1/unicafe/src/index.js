import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const App = () => {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleClick = (state) => {
    const valoracion = () => {
      if(state === 0){
        setGood(good + 1)
      } 
      else {
        if(state === 1){
          setNeutral(neutral + 1)
        }
        else{
          setBad(bad + 1)
        }
      }
    }
    return valoracion
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleClick(0)}>good</button>
      <button onClick={handleClick(1)}>neutral</button>
      <button onClick={handleClick()}>bad</button>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
