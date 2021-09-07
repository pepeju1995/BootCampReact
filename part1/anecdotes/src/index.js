import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const lengthAnecdotes = props.anecdotes.length
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(lengthAnecdotes).fill(0))
  const [bestAnec, setBestAnec] = useState(0)

  const handleClick = () => {
    const randomAnec = Math.floor(Math.random()*lengthAnecdotes)
    return setSelected(randomAnec)
  }

  const maxVoted = () => {
    let maxPos = bestAnec
    for(let i=0; i < lengthAnecdotes; i++) {
      if(points[maxPos] < points[i]){
        maxPos = i
      }
    }
    
    setBestAnec(maxPos)
  }

  const voteAnecdote = (selected) => {
    const voted = () => {
      const oldPoints = [...points]
      oldPoints[selected] += 1
      setPoints(oldPoints)
      maxVoted()
    }
    console.log(bestAnec, points[bestAnec])
    return voted
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <button onClick={voteAnecdote(selected)}>vote</button>
      <button onClick={handleClick}>Next Anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[bestAnec]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>,
  document.getElementById('root')
);
