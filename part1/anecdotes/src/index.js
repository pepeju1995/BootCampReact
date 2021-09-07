import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({name}) => <h1>{name}</h1>

const Anecdote = ({text, voteCount}) => <div>
  <p>{text}</p>
  <p>Ha tenido {voteCount} votos</p>
</div>

const Button = ({text, onClick}) => 
  <button onClick={onClick}>
    {text}
  </button>

const Winner = ({anecdotes, allVotes}) => {
  const mostVoted = Math.max(...allVotes)
  const winnerIndex = allVotes.indexOf(mostVoted)
  const winner = anecdotes[winnerIndex]

  if(mostVoted === 0){
    return (
      <h1>No votes Yet</h1>
    )
  }
  return (
    <div>
      <h1>Winner</h1>
      <p>{winner}</p>
      <p>With {mostVoted} votes</p>
    </div>
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const handleAnecdoteClick = () => {
    const randomAnec = Math.floor(Math.random()*anecdotes.length)
    setSelected(randomAnec)
  }

  const handleVoteClick = () => {
    const newAllVotes = [...points]
    newAllVotes[selected] += 1
    setPoints(newAllVotes)
  }

  return (
    <div>
      <Header name="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} voteCount={points[selected]} />
      <Button text="Vote" onClick={handleVoteClick} />
      <Button text="Next Anecdote" onClick={handleAnecdoteClick} />
      <Winner anecdotes={anecdotes} allVotes={points} />
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
