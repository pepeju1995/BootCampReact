import './App.css';
import { useState, useEffect } from 'react';
import {Persons} from './Components/Person'
import { Filter } from './Components/Filter';
import { PersonForm } from './Components/PersonForm';
import personServices from './Services/index'

function App() {
  const [allPersons, setAllPersons] = useState([])
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    personServices
      .getAllPersons()
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
    const existe = allPersons.filter(person => person.name === newName)

    const personToAdd = existe[0]
    const updatePerson = {...personToAdd, number: newNumber}
    
    if(existe.length !== 0){
      if(window.confirm(`Desea actualizar el telefono de ${updatePerson.name}?`))
      personServices
        .update(personToAdd.id, updatePerson)
        .then(personUpdate => {
          console.log(`${personUpdate.name} se ha actualizado correctamente.`)
          setAllPersons(allPersons.map(personItem => personItem.id !== personToAdd.id ? personItem : personUpdate))
        })
    } else {
      const personToAdd = {
        name: newName,
        number: newNumber,
        id: allPersons.length + 1
      }
      personServices
        .setPerson(personToAdd)
        .then((newPerson) => {
          setAllPersons(prevAllPerson => prevAllPerson.concat(newPerson))
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id) => {
    const filteredPerson = allPersons.filter(person => person.id === id)
    const personName = filteredPerson[0].name
    const personId = filteredPerson[0].id
    
    if(window.confirm(`Eliminar ${personName}`)){
      personServices
        .remove(id)
      console.log(`${personName} se ha eliminado correctamente`)
      setAllPersons(allPersons.filter(person => person.id !== personId))
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
      {newSearch === '' ? <Persons persons={allPersons} deletePerson={deletePerson} /> 
        : <Persons persons={persons} deletePerson={deletePerson} />}
    </div>
  );
}

export default App;
