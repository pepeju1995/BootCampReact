const Person = ({person, deletePerson}) => {
    return (
        <li>
            {person.name} {person.number} 
            <button onClick={() => deletePerson(person.id)}>
                Delete
            </button>
        </li>
    )
}


export const Persons = ({persons, deletePerson}) => {
    return (
        <ol>
            {persons.map((person, i) => 
                <Person person={person} key={i} deletePerson={deletePerson} />
            )}
        </ol>
    )
}