const Countrie = ({countrie}) => {
    return (
        <div>
            <h2>{countrie.name}</h2>
            <br/>
            <p>Capital: {countrie.capital}</p>
            <p>Population: {countrie.population}</p>
            <h3>Languages</h3>
            <ul>
                {countrie.languages.map(language => 
                    <li key={language.iso639_1}>{language.name}</li>
                )}
            </ul>
            <img src={countrie.flag} alt="flag" width="100px" />
        </div>
    )
}

export const Countries = ({countries, setCountries}) => {
    if(countries.length > 10){
        return (
            <p>Too many countries, specify another filter</p>
        )
    }else if(countries.length > 2 || countries.length === 0){
        return (
            <ul>
                {countries.map((countrie, i) => 
                    <li key={i}>{countrie.name} <button onClick={() => setCountries([countrie])}>Show</button></li>
                )}
            </ul>
        )   
    }else {
        return (
            <div>
                <Countrie countrie={countries[0]} />
            </div>
        )
    }
}