import axios from "axios";
import { useEffect, useState } from "react";
import { Countries } from "./Components/Countries";
import { Find } from "./Components/FindForm";

const App = () => {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setAllCountries(response.data)
      })
  }, [])

  const handleChange = (event) => {
    const search = event.target.value
    
    const regex = RegExp(search, 'i')
    const filterCountries = allCountries.filter(countrie => countrie.name.match(regex))
    setCountries(filterCountries)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h1>Countries</h1>
      <Find handleChange={handleChange} value={newFilter}/>
      <Countries countries={countries} setCountries={setCountries}/>
    </div>
  );
}

export default App;
