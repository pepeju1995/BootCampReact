import axios from "axios";
import { useEffect, useState } from "react";
import { Countries } from "./Components/Countries";
import { Find } from "./Components/FindForm";

const App = () => {
  const [countries, setCountries] = useState([])
  const [viewCountries, setViewCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [muchCountries, setMuchCountries] = useState(false)

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries(response.data)
      })
  }, [])

  const handleChange = (event) => {
    const search = event.target.value
    const regex = RegExp(search, 'i')
    const filterCountries = countries.filter(countrie => countrie.name.match(regex))
    if(filterCountries.length > 10){
      setMuchCountries(true)
    }
    else{
      setViewCountries(filterCountries)
      setMuchCountries(false)
    }
    setNewSearch(search)
  }

  return (
    <div>
      <h1>Countries</h1>
      <Find handleChange={handleChange} value={newSearch}/>
      <Countries countries={viewCountries} message={muchCountries}/>
    </div>
  );
}

export default App;
