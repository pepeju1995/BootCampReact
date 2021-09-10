import './App.css';
import { useState, useEffect } from 'react';
import {Persons} from './Components/Person'
import { Filter } from './Components/Filter';
import { PersonForm } from './Components/PersonForm';
import axios from 'axios';

function App() {
  const [allPersons, setAllPersons] = useState([])
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    axios.get("http://localhost:3001/persons")
      .then((response) => {
        console.log(response.data)
        setAllPersons(response.data)
        setPersons(response.data)
      })
  }, [])

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleChangeSearch = (event) => {
    setNewSearch(event.target.value)
    const regex = new RegExp(newSearch, 'i')
    const filteredPersons = () => allPersons.filter(person => person.name.match(regex))
    setPersons(filteredPersons)    
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(persons.find(name => name.name).name !== newName){
      const newList = allPersons.concat({
        name: newName,
        number: newNumber
      })
      setPersons(newList)
      setAllPersons(newList)
      setNewName('')
      setNewNumber('')
    }
    else{
      alert(`${newName} esta ya incluido`)
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleChangeSearch} />
      <h2>Add New Person</h2>
      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} 
      handleChangeNumber={handleChangeNumber} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
}

export default App;
