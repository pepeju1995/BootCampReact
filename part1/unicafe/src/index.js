import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const Statistic = ({text, value}) => {

  if(text === "positive"){
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({clicks}) => {
  const all = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good - clicks.bad) / all
  const positive = clicks.good * (100 / all)

  if(all === 0){
    return <p>No feedback given</p>
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={clicks.good} />
          <Statistic text="neutral" value={clicks.neutral} />
          <Statistic text="bad" value={clicks.bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {

  const [clicks, setClicks] =useState({
    good:0, neutral:0, bad:0
  })

  const handleClick = (state) => {
    const valoracion = () => {
      if(state === 0){
        setClicks({...clicks, good: clicks.good + 1})
      } 
      else {
        if(state === 1){
          setClicks({...clicks, neutral: clicks.neutral + 1})
        }
        else{
          setClicks({...clicks, bad: clicks.bad + 1})
        }
      }
    }
    return valoracion
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" handleClick={handleClick(0)} />
      <Button text="neutral" handleClick={handleClick(1)} />
      <Button text="bad" handleClick={handleClick()} />
      <h2>Statistics</h2>
      <Statistics clicks={clicks} />
    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
