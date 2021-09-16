import './App.css';
import { useState, useEffect } from 'react';
import {Persons} from './Components/Person'
import { Filter } from './Components/Filter';
import { PersonForm } from './Components/PersonForm';
import { getAllPersons, setPerson } from './Services';

const DATA = "http://localhost:3001/persons"

function App() {
  const [allPersons, setAllPersons] = useState([])
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    getAllPersons(DATA)
      .then((response) => {
        setAllPersons(response)
      })
  }, [])

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleChangeSearch = (event) => {
    const search = event.target.value
    const regex = new RegExp(search, 'i')
    const filteredPersons = () => allPersons.filter(person => person.name.match(regex))
    setPersons(filteredPersons)    
    setNewSearch(search)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const existe = allPersons.find(person => person.name === newName)
    if(existe === 'undefined'){
      const newPerson = {
        name: newName,
        number: newNumber,
        id: allPersons.length + 1
      }
      setPerson(DATA, newPerson)
        .then((newPerson) => {
          setAllPersons(prevAllPerson => prevAllPerson.concat(newPerson))
        })
    }
    else{
      alert(`${newName} esta ya incluido`)
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleChangeSearch} />
      <h2>Add New Person</h2>
      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} 
      handleChangeNumber={handleChangeNumber} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      {newSearch === '' ? <Persons persons={allPersons} /> 
        : <Persons persons={persons} />}
    </div>
  );
}

export default App;
