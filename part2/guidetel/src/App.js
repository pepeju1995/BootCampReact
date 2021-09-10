import './App.css';
import { useState } from 'react';
import {Persons} from './Components/Person'
import { Filter } from './Components/Filter';
import { PersonForm } from './Components/PersonForm';

function App() {
  const [allPersons, setAllPersons] = useState([
    { name: 'Arto Hellas', telef: '040123456' },
    { name: 'Ada Lovelace', telef: '395323523' },
    { name: 'Dan Abramov', telef: '122343454' },
    { name: 'Mary Poppendieck', telef: '392312215' }
  ])
  const [persons, setPersons] = useState(allPersons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

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
        telef: newNumber
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
