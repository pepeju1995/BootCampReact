import axios from "axios";
import { useEffect, useState } from "react";
import { Countries } from "./Components/Countries";
import { Find } from "./Components/FindForm";

const App = () => {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries(response.data)
      })
  }, [])

  const handleChange = (event) => {
    setNewSearch(event.target.value)
    if(newSearch){
      const regex = RegExp(newSearch, 'i')
      const filterCountries = countries.filter(countrie => countrie.name.match(regex))
      setCountries(filterCountries)
    }
  }

  return (
    <div>
      <h1>Countries</h1>
      <Find handleChange={handleChange} value={newSearch}/>
      <Countries countries={countries} setCountries={setCountries}/>
    </div>
  );
}

export default App;
