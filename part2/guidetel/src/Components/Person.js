const Person = ({person}) => {
    return (
        <li>{person.name} {person.telef}</li>
    )
}


export const Persons = ({persons}) => {
    return (
        <ol>
            {persons.map((person) => <Person person={person} key={person.name} />)}
        </ol>
    )
}