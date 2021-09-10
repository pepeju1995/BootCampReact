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

export const Countries = ({countries, message}) => {
    if(countries.length === 1){
        return (
            <div>
                <Countrie countrie={countries[0]} />
            </div>
        )
    }
    if(message){
        return (
            <p>Too many countries, specify another filter</p>
        )
    }
    return (
        <ol>
            {countries.map(countrie => {
                return (
                    <div key={countrie.name}>
                        <li>{countrie.name}</li> 
                        <button onClick={() => <Countrie countrie={countrie} />}>Show</button>
                    </div>
                )}   
            )}
        </ol>
    )
}