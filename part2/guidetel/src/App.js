import './App.css';
import { useState } from 'react';
import {Persons} from './Person'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', telef:'659896532'}
  ])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('000000000')

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(persons.find(name => name.name).name !== newName){
      const nameToAdd = {
        name: newName,
        telef: number
      }
      setPersons(persons.concat(nameToAdd))
      setNewName('')
    }
    else{
      alert(`${newName} esta ya incluido`)
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChangeName} value={newName}/>
        </div>
        <div>number: <input onChange={handleChangeNumber} value={number}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
}

export default App;
